import { NextResponse } from "next/server";

export async function GET() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

  if (!resumeLink) {
    return NextResponse.json({ error: "Resume link not found" }, { status: 500 });
  }

  return NextResponse.redirect(resumeLink, 302);
}
