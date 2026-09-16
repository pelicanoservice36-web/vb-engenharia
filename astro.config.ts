import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: troque pela URL final de produção antes do deploy.
// Lembre-se de atualizar também a linha "Sitemap:" em public/robots.txt.
const SITE_URL = 'https://www.vbengenharia.com.br';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  image: {
    layout: 'constrained',
  },
});
