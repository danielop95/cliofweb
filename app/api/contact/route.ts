import { NextResponse } from "next/server";
import { ServerClient } from "postmark";
import * as z from "zod";

// Initialize Postmark client
// NOTE: Ideally, use process.env.POSTMARK_API_KEY. For now, we handle the case where it might be missing gracefully.
const postmarkClient = process.env.POSTMARK_API_KEY
  ? new ServerClient(process.env.POSTMARK_API_KEY)
  : null;

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
  source: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, message, source } = validation.data;

    // Send email via Postmark
    if (postmarkClient) {
      await postmarkClient.sendEmail({
        "From": "noreply@cliof.com", // This needs to be a verified sender in Postmark
        "To": "internal@cliof.com",   // The internal team email
        "Subject": `Nuevo contacto desde: ${source}`,
        "HtmlBody": `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Origen:</strong> ${source}</p>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
            ${message}
          </blockquote>
        `,
        "TextBody": `Nuevo mensaje de ${name} (${email}, ${phone}) desde ${source}: ${message}`,
        "MessageStream": "outbound"
      });
    } else {
      console.log("Postmark API Key not found. Simulating email send:", validation.data);
    }

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
