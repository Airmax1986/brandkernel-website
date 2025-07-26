import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // In a real application, you would save the email to a database.
  // For this example, we'll just log it to the console.
  console.log(`New waitlist submission: ${email}`);

  return NextResponse.json({ message: "Successfully joined the waitlist!" });
}