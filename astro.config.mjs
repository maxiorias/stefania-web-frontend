// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stefania-alberti.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  // Variables del formulario de contacto: se cargan en Vercel (Settings → Environment Variables)
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      EMAIL_USER: envField.string({ context: 'server', access: 'secret' }),
    }
  },

  adapter: vercel(),
  integrations: [sitemap()]
});