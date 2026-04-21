import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = `Alejandro Morales <${process.env.EMAIL_FROM!}>`
const TO = process.env.EMAIL_TO!

export async function POST(req: Request) {
  const { nombre, email, empresa, servicio, mensaje } = await req.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  try {
    // Notificación a Alejandro — siempre se envía
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Nueva consulta web — ${nombre} — ${servicio || 'Sin servicio'}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#f9fafb;border-radius:12px">
          <h2 style="margin:0 0 4px;font-size:20px;color:#111">Nueva consulta desde tu web</h2>
          <p style="margin:0 0 24px;font-size:13px;color:#6b7280">Alguien rellenó el formulario de contacto.</p>

          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:10px 12px;background:#fff;border-radius:8px 8px 0 0;border-bottom:1px solid #f3f4f6;color:#6b7280;width:110px">Nombre</td>
              <td style="padding:10px 12px;background:#fff;border-radius:8px 8px 0 0;border-bottom:1px solid #f3f4f6;color:#111;font-weight:600">${nombre}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#6b7280">Email</td>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#111"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#6b7280">Empresa</td>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#111">${empresa || '—'}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#6b7280">Servicio</td>
              <td style="padding:10px 12px;background:#fff;border-bottom:1px solid #f3f4f6;color:#111">${servicio || '—'}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#fff;border-radius:0 0 8px 8px;color:#6b7280;vertical-align:top">Mensaje</td>
              <td style="padding:10px 12px;background:#fff;border-radius:0 0 8px 8px;color:#111;white-space:pre-wrap">${mensaje}</td>
            </tr>
          </table>

          <a href="mailto:${email}" style="display:inline-block;margin-top:24px;padding:10px 20px;background:#7c3aed;color:#fff;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none">
            Responder a ${nombre}
          </a>

          <p style="margin-top:32px;font-size:11px;color:#9ca3af">Mensaje enviado desde tu web</p>
        </div>
      `,
    })

    // Confirmación al visitante — solo si el dominio está verificado (FROM distinto a onboarding@resend.dev)
    if (FROM !== 'onboarding@resend.dev') {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: `¡Recibí tu mensaje, ${nombre}!`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:40px 24px">
            <h1 style="margin:0 0 8px;font-size:22px;color:#111">¡Gracias por escribirme, ${nombre}!</h1>
            <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6">
              Recibí tu mensaje y me pondré en contacto contigo en <strong>menos de 24 horas</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:13px;color:#9ca3af;line-height:1.6">
              Por favor, no respondas a este correo — no está monitoreado. Si necesitas contactarme directamente, escríbeme por WhatsApp.
            </p>

            <div style="background:#f5f3ff;border-left:4px solid #7c3aed;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:24px">
              <p style="margin:0;font-size:13px;color:#5b21b6;font-weight:600">Tu consulta fue sobre:</p>
              <p style="margin:4px 0 0;font-size:13px;color:#6d28d9">${servicio || 'Consulta general'}</p>
            </div>

            <p style="font-size:14px;color:#6b7280;line-height:1.6">
              Mientras tanto, si quieres saber más sobre cómo trabajo, puedes visitar mi web o leer sobre los servicios disponibles.
            </p>

            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #f3f4f6">
              <p style="margin:0;font-size:14px;color:#111;font-weight:600">Alejandro Morales</p>
              <p style="margin:2px 0;font-size:13px;color:#6b7280">Sistemas digitales con IA</p>
              <a href="https://wa.me/34676017218?text=Hola%20Alejandro%2C%20te%20escribo%20desde%20tu%20web" style="font-size:13px;color:#7c3aed;text-decoration:none">WhatsApp: +34 676 017 218</a>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 })
  }
}
