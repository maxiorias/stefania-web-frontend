// Formulario de contacto: reemplaza al backend Express que corría en Render.
// Corre como función serverless en Vercel, en el mismo dominio (sin CORS).
import type { APIRoute } from 'astro';
import { RESEND_API_KEY, EMAIL_USER } from 'astro:env/server';
import { Resend } from 'resend';

export const prerender = false;

// Rate limit en memoria: vale por instancia de la función, así que es de mejor esfuerzo.
// Alcanza para frenar a alguien apretando "Enviar" en loop; el honeypot frena a los bots.
const VENTANA_MS = 15 * 60 * 1000;
const MAX_POR_VENTANA = 5;
const intentos = new Map<string, number[]>();

function superaLimite(ip: string) {
  const ahora = Date.now();
  const recientes = (intentos.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  intentos.set(ip, recientes);
  return recientes.length > MAX_POR_VENTANA;
}

const escapar = (texto: string) =>
  texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const responder = (status: number, cuerpo: object) =>
  new Response(JSON.stringify(cuerpo), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return responder(400, { ok: false });
  }

  // Honeypot: si vino completo es un bot. Le decimos que salió bien para que no reintente.
  if (datos.website) return responder(200, { ok: true });

  if (superaLimite(clientAddress)) {
    return responder(429, { ok: false, message: 'Demasiados mensajes seguidos. Intentá nuevamente más tarde.' });
  }

  const nombre = String(datos.nombre ?? '').trim();
  const email = String(datos.email ?? '').trim();
  const mensaje = String(datos.mensaje ?? '').trim();

  if (
    nombre.length < 2 || nombre.length > 80 ||
    email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    mensaje.length < 10 || mensaje.length > 500
  ) {
    return responder(400, { ok: false, message: 'Revisá los datos del formulario.' });
  }

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: 'Contacto Web <onboarding@resend.dev>',
    to: EMAIL_USER,
    replyTo: email,
    subject: `Nuevo mensaje desde la web de ${escapar(nombre)}`,
    html: `
      <h2>Nuevo mensaje desde la web</h2>
      <p><strong>Nombre:</strong> ${escapar(nombre)}</p>
      <p><strong>Email:</strong> ${escapar(email)}</p>
      <hr/>
      <p style="white-space:pre-wrap">${escapar(mensaje)}</p>
    `,
  });

  if (error) {
    console.error('Error de Resend:', error);
    return responder(500, { ok: false, message: 'No se pudo enviar el mensaje. Intentá nuevamente.' });
  }

  return responder(200, { ok: true });
};
