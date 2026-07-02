import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", issues: parsed.error.flatten() }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    submittedAt: new Date().toISOString()
  };

  // Production hook: send this payload to email, a CRM, or a database provider.
  console.info("New Deccan Digital Solutions inquiry", payload);

  return NextResponse.json({ ok: true });
}
