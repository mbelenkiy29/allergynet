import { NextResponse } from "next/server";

type ContactRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  practiceName?: string;
  role?: string;
  message?: string;
};

const DEFAULT_USESEND_API_URL = "https://app.usesend.com/api/v1/emails";
const CONTACT_RECIPIENT_EMAIL = "partnerships@nationwideallergy.net";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function stripWrappingQuotes(value: string) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function normalizeEmailAddress(value: string) {
  const withoutQuotes = stripWrappingQuotes(value);
  const bracketMatch = withoutQuotes.match(/<([^<>]+)>/);
  return (bracketMatch?.[1] ?? withoutQuotes).trim().toLowerCase();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function line(label: string, value: string) {
  return value ? `${label}: ${value}` : `${label}: Not provided`;
}

function getProviderMessage(details: string) {
  try {
    const parsed = JSON.parse(details) as {
      error?: string;
      message?: string;
      code?: string;
    };

    return parsed.error ?? parsed.message ?? parsed.code ?? details;
  } catch {
    return details;
  }
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const contact = {
    firstName: clean(payload.firstName),
    lastName: clean(payload.lastName),
    email: clean(payload.email).toLowerCase(),
    phone: clean(payload.phone),
    practiceName: clean(payload.practiceName),
    role: clean(payload.role),
    message: clean(payload.message),
  };

  if (
    !contact.firstName ||
    !contact.lastName ||
    !contact.email ||
    !contact.practiceName ||
    !contact.message
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (contact.message.length > 4000) {
    return NextResponse.json(
      { error: "Please keep your message under 4,000 characters." },
      { status: 400 },
    );
  }

  const usesendApiKey = stripWrappingQuotes(process.env.USESEND_API_KEY ?? "");
  const usesendApiUrl = stripWrappingQuotes(
    process.env.USESEND_API_URL ?? DEFAULT_USESEND_API_URL,
  );
  const fromEmail = normalizeEmailAddress(
    process.env.USESEND_FROM_EMAIL ?? CONTACT_RECIPIENT_EMAIL,
  );

  if (!usesendApiKey) {
    console.error("Missing USESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  try {
    new URL(usesendApiUrl);
  } catch {
    console.error("Invalid USESEND_API_URL environment variable.");
    return NextResponse.json(
      { error: "Contact form email service URL is not configured correctly." },
      { status: 500 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    console.error("Invalid USESEND_FROM_EMAIL environment variable.");
    return NextResponse.json(
      { error: "Contact form sender is not configured correctly." },
      { status: 500 },
    );
  }

  const fullName = `${contact.firstName} ${contact.lastName}`;
  const subject = `New Nationwide Allergy inquiry from ${fullName}`;
  const submittedAt = new Date().toISOString();

  const text = [
    subject,
    "",
    line("Name", fullName),
    line("Email", contact.email),
    line("Phone", contact.phone),
    line("Practice", contact.practiceName),
    line("Role", contact.role),
    line("Submitted", submittedAt),
    "",
    "Message:",
    contact.message,
  ].join("\n");

  const fields = [
    ["Name", fullName],
    ["Email", contact.email],
    ["Phone", contact.phone || "Not provided"],
    ["Practice", contact.practiceName],
    ["Role", contact.role || "Not provided"],
    ["Submitted", submittedAt],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #2a1d1f; line-height: 1.5;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New Nationwide Allergy inquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          ${fields
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border: 1px solid #e8e5e0; padding: 8px 10px; font-weight: 700; width: 120px;">${escapeHtml(label)}</td>
                  <td style="border: 1px solid #e8e5e0; padding: 8px 10px;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(contact.message)}</p>
    </div>
  `;

  let response: Response;

  try {
    response = await fetch(usesendApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${usesendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: CONTACT_RECIPIENT_EMAIL,
        from: fromEmail,
        subject,
        replyTo: contact.email,
        text,
        html,
      }),
    });
  } catch (err) {
    console.error("Usesend contact email request failed:", err);

    return NextResponse.json(
      { error: "We could not reach the email service. Please try again." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const details = await response.text();
    const providerMessage = getProviderMessage(details);
    console.error("Usesend contact email failed:", response.status, details);

    return NextResponse.json(
      {
        error: `Email service rejected the message: ${providerMessage || `HTTP ${response.status}`}`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
