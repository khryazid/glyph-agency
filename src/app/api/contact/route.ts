import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre completo.").max(120),
  email: z.string().trim().email("Ingresa un correo electrónico válido."),
  category: z.enum([
    "Sistema a Medida",
    "Web Comercial",
    "Redes y Meta Ads",
    "Plan Integral",
  ]),
  message: z
    .string()
    .trim()
    .min(15, "Cuéntanos un poco más sobre tu negocio o proyecto (mínimo 15 caracteres).")
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

  const crmIngestUrl = process.env.GLYPH_CRM_INGEST_URL?.trim();
  const crmApiKey = process.env.GLYPH_CRM_API_KEY?.trim();
  let crmCaptured = false;

  if (crmIngestUrl && crmApiKey) {
    try {
      const crmRes = await fetch(crmIngestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Glyph-Key": crmApiKey,
        },
        body: JSON.stringify({
          fullName: name,
          email,
          niche: category,
          source: "Web",
          message,
        }),
      });
      if (crmRes.ok) {
        crmCaptured = true;
      }
    } catch {
      // No bloquear la experiencia de contacto si el CRM está temporalmente inalcanzable
    }
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Glyph Agency <onboarding@resend.dev>";

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
          subject: `[Glyph Agency · ${category}] Nuevo contacto de ${name}`,
          text: `Nombre: ${name}\nCorreo: ${email}\nInterés: ${category}\n\nMensaje:\n${message}`,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json(
          { ok: true, delivery: "resend", crmCaptured },
          { status: 200 }
        );
      }
    } catch {
      // Cae al modo fallback controlado si falla la red hacia Resend
    }
  }

  if (crmCaptured) {
    return NextResponse.json({ ok: true, delivery: "crm" }, { status: 200 });
  }

  const subject = encodeURIComponent(`[Glyph Agency · ${category}] Consulta de ${name}`);
  const mailBody = encodeURIComponent(
    `Hola equipo de Glyph Agency,\n\nSoy ${name} (${email}).\nCategoría: ${category}\n\n${message}`
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
