import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo.").max(120),
  email: z.string().trim().email("Ingresa un correo electrónico válido."),
  category: z.enum([
    "Sistema a Medida",
    "Web Comercial",
    "Automatización e IA",
    "Asesoría Digital",
  ]),
  message: z
    .string()
    .trim()
    .min(15, "Cuéntame un poco más sobre tu negocio o proyecto (mínimo 15 caracteres).")
    .max(3000),
  companyWebsite: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Formato JSON inválido." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Revisa los campos del formulario.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, category, message, companyWebsite } = parsed.data;

  // Honeypot anti-spam: responder silenciosamente sin procesar
  if (companyWebsite && companyWebsite.trim().length > 0) {
    return NextResponse.json({ ok: true, delivery: "filtered" }, { status: 200 });
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>";

  if (resendKey && toEmail) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[Portafolio · ${category}] Nuevo contacto de ${name}`,
          text: `Nombre: ${name}\nCorreo: ${email}\nInterés: ${category}\n\nMensaje:\n${message}`,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({ ok: true, delivery: "resend" }, { status: 200 });
      }
    } catch {
      // Cae al modo fallback controlado si falla la red hacia Resend
    }
  }

  const subject = encodeURIComponent(`[Consulta · ${category}] Mensaje de ${name}`);
  const mailBody = encodeURIComponent(
    `Hola Khristian,\n\nSoy ${name} (${email}).\nCategoría: ${category}\n\n${message}`
  );
  const mailtoUrl = toEmail
    ? `mailto:${toEmail}?subject=${subject}&body=${mailBody}`
    : undefined;

  return NextResponse.json(
    {
      ok: true,
      delivery: "fallback",
      mailtoUrl,
    },
    { status: 200 }
  );
}
