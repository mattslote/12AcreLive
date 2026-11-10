import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage, Mailbox } from 'mimetext/browser';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const clean = (v, max = 2000) => String(v ?? '').trim().slice(0, max);

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: bots fill this, humans never see it.
  if (clean(data.website)) return json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 40);
  const company = clean(data.company, 160);
  const projectType = clean(data.projectType, 80);
  const budget = clean(data.budget, 80);
  const timeline = clean(data.timeline, 120);
  const message = clean(data.message, 5000);

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !message) {
    return json({ error: 'Please include your name, a valid email, and a message.' }, 400);
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(phone ? [`Phone: ${phone}`] : []),
    ...(company ? [`Company/Organization: ${company}`] : []),
    ...(projectType ? [`Project type: ${projectType}`] : []),
    ...(budget ? [`Budget: ${budget}`] : []),
    ...(timeline ? [`Timeline: ${timeline}`] : []),
    '',
    message,
  ];

  const msg = createMimeMessage();
  msg.setSender({ name: '12 Acre Live Website', addr: env.FROM_ADDRESS });
  msg.setRecipient(env.TO_ADDRESS);
  msg.setHeader('Reply-To', new Mailbox({ name: name.replace(/[<>"\r\n]/g, ''), addr: email }));
  msg.setSubject(`New inquiry from ${name.replace(/[\r\n]/g, ' ')}${projectType ? ` — ${projectType}` : ''}`);
  msg.addMessage({ contentType: 'text/plain', data: lines.join('\n') });

  try {
    await env.EMAIL.send(new EmailMessage(env.FROM_ADDRESS, env.TO_ADDRESS, msg.asRaw()));
  } catch (err) {
    console.error('send_email failed', JSON.stringify({
      name: err?.name,
      code: err?.code,
      message: err?.message,
      cause: err?.cause ? String(err.cause) : undefined,
    }));
    return json({ error: 'Could not send your message. Please email matt@12acrefilms.com directly.' }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
