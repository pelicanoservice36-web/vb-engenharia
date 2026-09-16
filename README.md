# VB Engenharia — Site institucional

Site institucional da VB Engenharia (engenharia elétrica industrial, comercial e predial), construído com [Astro](https://astro.build) + TypeScript, 100% estático, sem backend, pronto para deploy no Cloudflare Pages.

Todo o conteúdo institucional (missão, visão, valores, serviços, diferenciais e contatos) vem exclusivamente do material comercial oficial da empresa — nada foi inventado (endereço, certificações, número de clientes/projetos e avaliações não estão documentados na fonte e por isso não aparecem no site).

## Stack

- **Astro 7** (saída estática, `output: 'static'`) + **TypeScript**
- CSS puro com *custom properties* (sem Tailwind, sem framework de UI)
- [`@fontsource-variable/inter`](https://fontsource.org/fonts/inter) — fonte Inter self-hosted (zero requisição externa)
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — `sitemap.xml` gerado automaticamente no build
- JavaScript vanilla mínimo (sem React/Vue): menu mobile, header sticky, botão de WhatsApp, scroll-reveal e validação do formulário de contato

## Desenvolvimento local

Pré-requisito: Node.js 18 ou superior.

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento em http://localhost:4321
npm run build     # typecheck (astro check) + build de produção em ./dist
npm run preview   # serve o build de produção localmente, para conferência final
npm run check     # roda só o typecheck
```

## Estrutura do projeto

```
src/
├── assets/images/       # fotos e logos de clientes (otimizados no build via astro:assets)
│   ├── experience/       # fotos reais de atividades de campo
│   └── clients/          # logos reais de clientes
├── components/
│   ├── Logo.astro         # logotipo recriado em SVG (não existe vetor oficial)
│   ├── icons/              # ícones em linha, originais (Icon.astro + paths.ts)
│   ├── ui/                 # Button, Container, SectionHeading
│   ├── WhatsAppButton.astro
│   └── sections/           # um componente por seção da home (Header, Hero, Services...)
├── data/                 # todo o texto/dados do site, tipados — edite aqui (ver abaixo)
├── layouts/BaseLayout.astro  # <head>, SEO, JSON-LD, fontes
├── pages/index.astro     # composição da página única
├── scripts/              # TS vanilla (header, scroll-reveal, contact-form)
└── styles/               # tokens.css (cores/espaçamento), base.css, utilities.css
public/                  # favicon, robots.txt, sitemap gerado, og-image, manifest
```

O site hoje é uma página única (`/`), mas a estrutura já está modular o bastante para no futuro virar páginas próprias (`/empresa`, `/servicos/spda`, `/contato` etc.) sem precisar reescrever o conteúdo — os dados de `src/data/services.ts` já estão organizados por categoria para isso.

## Como alterar o conteúdo do site

Todo o texto e os dados estruturados ficam em `src/data/*.ts`, nunca direto nos componentes `.astro`:

| O que mudar | Arquivo |
|---|---|
| Textos do Hero e do CTA final | `src/data/hero.ts` |
| Sobre a empresa, diferenciais, missão/visão/valores, faixa de confiança | `src/data/company.ts` |
| Segmentos de atuação | `src/data/segments.ts` |
| Lista de serviços (por categoria) | `src/data/services.ts` |
| Fotos da seção "Experiência" | `src/data/experience.ts` |
| Logos de clientes | `src/data/clients.ts` |
| Contatos (telefone, e-mail, WhatsApp) | `src/data/contacts.ts` |
| Menu de navegação | `src/data/nav.ts` |
| Título/descrição padrão e JSON-LD (Schema.org) | `src/data/seo.ts` |

## Como trocar imagens

Coloque os arquivos em `src/assets/images/<pasta>/` (não em `public/`) e importe-os no arquivo de dados correspondente — o Astro otimiza automaticamente para WebP, gera as dimensões corretas e faz lazy loading fora da primeira dobra. Exemplo, ao trocar uma foto de experiência:

```ts
// src/data/experience.ts
import novaFoto from '../assets/images/experience/nova-foto.jpg';
```

## Como alterar as cores

Todas as cores são variáveis CSS em `src/styles/tokens.css`. A paleta atual foi validada para contraste **WCAG 2.2 AA**; ao trocar uma cor, confira o contraste do novo par fundo/texto (por exemplo em [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)). Regra importante já documentada no arquivo: `--color-orange` não deve virar fundo de botão com texto branco (contraste insuficiente).

## Como alterar os contatos / WhatsApp

Edite `src/data/contacts.ts`. Cada contato tem `phoneE164` (formato `55DDNNNNNNNNN`, sem símbolos) usado tanto no link `tel:` quanto no `wa.me`. O contato marcado com `isWhatsAppDefault: true` é o usado no botão flutuante e nos CTAs gerais de WhatsApp do site.

## Domínio de produção

O `astro.config.ts` usa um domínio placeholder (`https://www.vbengenharia.com.br`), necessário para gerar canonical, Open Graph e sitemap corretos. **Antes de publicar**, atualize:

1. `site` em `astro.config.ts`
2. A linha `Sitemap:` em `public/robots.txt`

## Integrando o formulário de contato

O formulário (`src/components/sections/ContactForm.astro` + `src/scripts/contact-form.ts`) já está completo em HTML, validação client-side e acessibilidade, mas **não envia dados para nenhum lugar** — como o site não tem backend, isso seria simular um envio que não acontece. Hoje, ao enviar, o usuário vê uma mensagem transparente orientando a usar WhatsApp/telefone/e-mail.

Para ativar o envio de verdade, algumas opções sem precisar de servidor próprio:

- **[Formspree](https://formspree.io/)** ou **[Web3Forms](https://web3forms.com/)**: troque a lógica de `contact-form.ts` por um `fetch()` para o endpoint deles.
- **Cloudflare Pages Functions**: crie `functions/api/contact.ts` no projeto e faça o `fetch('/api/contact', ...)` a partir do mesmo script.

## Analytics (a configurar)

Nenhum ID de Google Analytics/GTM/Search Console foi adicionado (evitar IDs fictícios). Para instalar depois:

- **Google Analytics 4 / GTM**: adicione o snippet oficial em `src/layouts/BaseLayout.astro`, dentro de `<head>`.
- **Google Search Console**: verifique a propriedade pela tag HTML (mesma ideia) ou via DNS, e submeta `https://SEU-DOMINIO/sitemap-index.xml`.

## Deploy no Cloudflare

O projeto está pronto tanto para **Cloudflare Pages** (clássico) quanto para **Cloudflare Workers com Static Assets** (o fluxo unificado mais recente do dashboard da Cloudflare, que gera URLs `*.workers.dev`).

### Cloudflare Pages

1. Suba o repositório no GitHub.
2. No Cloudflare Pages, conecte o repositório.
3. Configure o build:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Nenhuma variável de ambiente é necessária (site 100% estático).

### Cloudflare Workers (Static Assets)

Se o dashboard te levar para o fluxo de **Workers** em vez de Pages (URL final `*.workers.dev`), o arquivo `wrangler.jsonc` na raiz do projeto já configura o Worker para servir a pasta `dist/` como assets estáticos puros, sem nenhuma lógica de servidor:

```jsonc
{
  "name": "vb-engenharia",
  "compatibility_date": "2026-09-01",
  "assets": { "directory": "./dist" }
}
```

Isso é necessário porque, sem esse arquivo, o Cloudflare pode presumir que um projeto Astro precisa rodar em modo servidor (SSR) — o que quebra as imagens otimizadas por `astro:assets`, já que elas passam a depender de um endpoint `/_image` em tempo de execução que não existe num deploy estático. Configure o build/deploy como:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

Todo push na branch de produção gera um novo deploy automaticamente, nos dois fluxos.

## Observação sobre o PDF de origem

O arquivo `Apresentação comercial atualizada-2026.pdf` (material comercial usado como fonte de todo o conteúdo) fica fora do controle de versão (`.gitignore`) porque contém dados de contato pessoais e não precisa ser publicado junto com o código. Ele permanece no seu disco local como referência.

## Sobre a pasta `Logo/`

A pasta `Logo/` na raiz do projeto contém os arquivos originais da logo oficial fornecidos pela empresa (`VB Engenharia Logo.png`, com fundo branco, e `VB Engenharia Logo Without Background.png`, com transparência). O site usa uma versão recortada e tratada desses arquivos em `src/assets/images/logo/vb-engenharia-logo.png` — a transparência original tinha uma franja de cor nas bordas (resíduo da remoção de fundo) que foi corrigida antes do recorte. Os arquivos da pasta `Logo/` ficam guardados como fonte, caso seja necessário gerar um novo recorte no futuro.
