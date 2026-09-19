/**
 * Script customizado do Cloudflare Worker deste projeto — NÃO é uma "Pages
 * Function" (isso é recurso do Cloudflare Pages clássico, com pasta
 * functions/, e não se aplica aqui). Este projeto usa "Workers com Static
 * Assets": o wrangler.jsonc aponta `main` para este arquivo, que intercepta
 * só `/api/contato` (ver `run_worker_first` no wrangler.jsonc) e delega
 * qualquer outra rota para `env.ASSETS.fetch()`, servindo os arquivos
 * estáticos normalmente — a home e as páginas de serviço continuam 100%
 * estáticas, sem passar por este script.
 *
 * Sem as secrets RESEND_API_KEY e CONTACT_TO_EMAIL configuradas (ver
 * README, seção "Integrando o formulário de contato"), o endpoint responde
 * 503 de propósito — o formulário no navegador já sabe mostrar a mesma
 * mensagem honesta de antes ("ainda não está conectado") nesse caso, em vez
 * de fingir que o e-mail foi enviado.
 */

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
}

const REQUIRED_FIELDS = ['name', 'phone', 'email', 'service', 'message'] as const;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'method_not_allowed' }, 405);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: 'invalid_body' }, 400);
  }

  const data: Record<string, string> = {};
  for (const field of ['name', 'company', 'phone', 'email', 'service', 'message'] as const) {
    data[field] = String(form.get(field) ?? '').trim();
  }

  const missing = REQUIRED_FIELDS.filter((field) => !data[field]);
  if (missing.length > 0) {
    return jsonResponse({ ok: false, error: 'missing_fields', fields: missing }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    // Honesto: sem as secrets configuradas, não existe envio de verdade.
    return jsonResponse({ ok: false, error: 'not_configured' }, 503);
  }

  const bodyLines = [
    `Nome: ${data.name}`,
    data.company && `Empresa: ${data.company}`,
    `Telefone: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Serviço de interesse: ${data.service}`,
    '',
    'Mensagem:',
    data.message,
  ].filter((line): line is string => Boolean(line));

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Site VB Engenharia <onboarding@resend.dev>',
      to: [env.CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: `Novo contato pelo site — ${data.name}`,
      text: bodyLines.join('\n'),
    }),
  });

  if (!emailResponse.ok) {
    return jsonResponse({ ok: false, error: 'send_failed' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contato') {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
