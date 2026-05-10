import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const defaultContactRecipient = "pritamkumarpanda@prothomai.com";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeHtmlWithBreaks(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const message = body.message?.trim() || "";
    const contactRecipient = process.env.CONTACT_EMAIL || defaultContactRecipient;

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtmlWithBreaks(message);

    // Send email to you
    await resend.emails.send({
      from: "YPark Contact <onboarding@resend.dev>",
      to: contactRecipient,
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f4f9ff; border-radius: 12px;">
          
          <div style="background: linear-gradient(135deg, #00C9A7, #1565C0); padding: 1.5rem 2rem; border-radius: 10px 10px 0 0; margin: -2rem -2rem 2rem;">
            <div style="font-size: 1.25rem; font-weight: 800; color: white; letter-spacing: -0.3px;">
              Prothom Analytica India
            </div>
            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">
              New Contact Form Submission
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #8BA8C8; text-transform: uppercase; letter-spacing: 0.08em;">
                  Name
                </span>
              </td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <span style="font-size: 0.875rem; color: #0D1B2A; font-weight: 600;">
                  ${safeName}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #8BA8C8; text-transform: uppercase; letter-spacing: 0.08em;">
                  Email
                </span>
              </td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <a href="mailto:${safeEmail}" style="font-size: 0.875rem; color: #1565C0; font-weight: 600;">
                  ${safeEmail}
                </a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #8BA8C8; text-transform: uppercase; letter-spacing: 0.08em;">
                  Phone
                </span>
              </td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #E2EBF6;">
                <span style="font-size: 0.875rem; color: #0D1B2A; font-weight: 600;">
                  ${safePhone}
                </span>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 0.75rem 0; vertical-align: top; padding-top: 1rem;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #8BA8C8; text-transform: uppercase; letter-spacing: 0.08em;">
                  Message
                </span>
              </td>
              <td style="padding: 0.75rem 0; padding-top: 1rem;">
                <div style="font-size: 0.875rem; color: #2C3E50; line-height: 1.7; background: white; padding: 1rem; border-radius: 8px; border: 1px solid #E2EBF6;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
          </table>

          <div style="margin-top: 2rem; padding: 1rem; background: white; border-radius: 8px; border: 1px solid #E2EBF6; text-align: center;">
            <div style="font-size: 0.75rem; color: #8BA8C8;">
              Submitted via prothomai.com · Reply directly to ${safeEmail}
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    });

    // Send auto-reply to sender
    await resend.emails.send({
      from: "Prothom Analytica India <onboarding@resend.dev>",
      to: email,
      subject: "We received your message — Prothom Analytica India",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f4f9ff; border-radius: 12px;">
          
          <div style="background: linear-gradient(135deg, #00C9A7, #1565C0); padding: 1.5rem 2rem; border-radius: 10px 10px 0 0; margin: -2rem -2rem 2rem;">
            <div style="font-size: 1.25rem; font-weight: 800; color: white;">
              Prothom Analytica India
            </div>
            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">
              We got your message.
            </div>
          </div>

          <p style="font-size: 0.95rem; color: #2C3E50; line-height: 1.8; margin-bottom: 1rem;">
            Hi ${safeName},
          </p>
          <p style="font-size: 0.95rem; color: #2C3E50; line-height: 1.8; margin-bottom: 1rem;">
            Thank you for reaching out. We have received your message
            and will respond within 24 hours.
          </p>
          <p style="font-size: 0.95rem; color: #2C3E50; line-height: 1.8; margin-bottom: 2rem;">
            In the meantime, you can explore our product at
            <a href="https://ypark.in" style="color: #1565C0; font-weight: 600;">ypark.in</a>
            or read our latest insights at
            <a href="https://prothomai.com/insights" style="color: #1565C0; font-weight: 600;">prothomai.com/insights</a>.
          </p>

          <div style="background: white; border: 1px solid #E2EBF6; border-radius: 10px; padding: 1.25rem; margin-bottom: 2rem;">
            <div style="font-size: 0.72rem; font-weight: 700; color: #8BA8C8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">
              Your message
            </div>
            <div style="font-size: 0.85rem; color: #506A84; line-height: 1.7;">
              ${safeMessage}
            </div>
          </div>

          <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid #E2EBF6;">
            <div style="font-size: 0.75rem; color: #8BA8C8;">
              Prothom Analytica India Pvt. Ltd.
            </div>
            <div style="font-size: 0.72rem; color: #8BA8C8; margin-top: 0.25rem;">
              info@prothomai.com · prothomai.com
            </div>
          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}