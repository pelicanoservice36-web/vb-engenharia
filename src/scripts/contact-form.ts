/**
 * Envia o formulário para /api/contato (worker/contact-worker.ts). Sem as
 * secrets RESEND_API_KEY/CONTACT_TO_EMAIL configuradas no Worker, o
 * endpoint responde 503 de propósito — mostramos a mesma mensagem honesta
 * de sempre ("ainda não está conectado a um sistema de envio") em vez de
 * fingir sucesso. Ver README, seção "Integrando o formulário de contato".
 */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
const statusEl = form?.querySelector<HTMLElement>('[data-contact-form-status]');
const submitButton = form?.querySelector<HTMLButtonElement>('.contact-form__submit');

const NOT_CONFIGURED_MESSAGE =
  'Este formulário ainda não está conectado a um sistema de envio. Para falar agora com nossa equipe, utilize o WhatsApp, o telefone ou o e-mail ao lado.';
const SUCCESS_MESSAGE = 'Mensagem enviada! Em breve nossa equipe entrará em contato.';
const ERROR_MESSAGE =
  'Não foi possível enviar sua mensagem agora. Tente novamente ou utilize o WhatsApp, o telefone ou o e-mail ao lado.';

function showStatus(kind: 'info' | 'success' | 'error', message: string) {
  if (!statusEl) return;
  statusEl.hidden = false;
  statusEl.textContent = message;
  statusEl.dataset.statusKind = kind;
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (submitButton) submitButton.disabled = true;

  try {
    const response = await fetch('/api/contato', {
      method: 'POST',
      body: new FormData(form),
    });

    if (response.ok) {
      showStatus('success', SUCCESS_MESSAGE);
      form.reset();
    } else if (response.status === 503) {
      showStatus('info', NOT_CONFIGURED_MESSAGE);
    } else {
      showStatus('error', ERROR_MESSAGE);
    }
  } catch {
    showStatus('error', ERROR_MESSAGE);
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});
