import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html } = await req.json();

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
