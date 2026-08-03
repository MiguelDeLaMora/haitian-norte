import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html, turnstileToken, leadData, campaign } = await req.json();

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

    // 1. Enviar correo transaccional
    await transporter.sendMail({
      from: `"Haitian CNC Norte" <${process.env.BREVO_FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    // 2. Registrar/actualizar contacto en la base de datos de Brevo
    const brevoApiKey = process.env.BREVO_API_KEY || process.env.BREVO_SMTP_KEY;
    if (brevoApiKey && leadData && leadData.email) {
      try {
        const nameParts = (leadData.nombre || '').trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        const cleanPhone = (leadData.telefono || '').replace(/[^\d+]/g, '');

        let formattedSMS = cleanPhone;
        if (cleanPhone) {
          if (cleanPhone.startsWith('+')) {
            formattedSMS = cleanPhone;
          } else if (cleanPhone.startsWith('52')) {
            formattedSMS = `+${cleanPhone}`;
          } else if (cleanPhone.length === 10) {
            formattedSMS = `+52${cleanPhone}`;
          } else {
            formattedSMS = `+${cleanPhone}`;
          }
        }

        const attributes: Record<string, any> = {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          EMPRESA: leadData.empresa || '',
          TELEFONO: cleanPhone,
          SMS: formattedSMS,
          ESTADO: leadData.estado || '',
          CIUDAD: leadData.ciudad || '',
          CATEGORIA: leadData.categoria || '',
          MENSAJE: leadData.mensaje || '',
        };

        // Mapear parámetros de campaña en mayúsculas según especificaciones
        if (campaign) {
          if (campaign.utm_source) attributes.UTM_SOURCE = campaign.utm_source;
          if (campaign.utm_medium) attributes.UTM_MEDIUM = campaign.utm_medium;
          if (campaign.utm_campaign) attributes.UTM_CAMPAIGN = campaign.utm_campaign;
          if (campaign.utm_term) attributes.UTM_TERM = campaign.utm_term;
          if (campaign.utm_content) attributes.UTM_CONTENT = campaign.utm_content;
          if (campaign.gclid) attributes.GCLID = campaign.gclid;
          if (campaign.fbclid) attributes.FBCLID = campaign.fbclid;
          if (campaign.referrer) attributes.REFERRER = campaign.referrer;
        }

        const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': brevoApiKey,
          },
          body: JSON.stringify({
            email: leadData.email.trim().toLowerCase(),
            attributes,
            updateEnabled: true,
          }),
        });

        if (!brevoRes.ok) {
          const errData = await brevoRes.json().catch(() => ({}));
          console.error('Error al registrar contacto en Brevo:', errData);
        } else {
          console.log('Contacto registrado/actualizado en Brevo exitosamente');
        }
      } catch (brevoErr) {
        console.error('Excepción al conectar con Brevo API:', brevoErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Error enviando email:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
