import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html, turnstileToken } = await req.json();

    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });
    const verifyData = await verify.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Verificación fallida' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Haitian CNC Norte" <${process.env.BREVO_FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Error enviando email:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
