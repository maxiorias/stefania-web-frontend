# Sitio de Stefania del Valle Alberti

Sitio profesional de psicopedagoga. Astro + Tailwind, deploy en Vercel.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
```

- Los textos (trayectoria, servicios, datos de contacto) están en `src/data/sitio.ts`.
- Las fotos van en `src/assets/`: Astro las convierte a WebP y las achica en el build.

## Formulario de contacto

`src/pages/api/enviar.ts` corre como función serverless en Vercel y manda el mail con Resend.
Reemplaza al backend Express que corría en Render (repo `stefania-web-backend`).

Variables de entorno (en Vercel: Settings → Environment Variables; en local: `.env`):

- `RESEND_API_KEY`: API key de Resend
- `EMAIL_USER`: casilla que recibe los mensajes
