// app/api/join-waitlist/route.ts
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialisiert den Redis-Client direkt mit den Environment Variables von Vercel
const redis = Redis.fromEnv();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase();

    // Überprüfen, ob die E-Mail bereits als Key existiert
    // 'sismember' prüft, ob ein Wert in einem Set vorhanden ist. Effizienter als get.
    const isMember = await redis.sismember('waitlist_emails', normalizedEmail);

    if (isMember) {
      return NextResponse.json({ message: 'You are already on the waitlist!' }, { status: 200 });
    }

    // Die E-Mail zu einem Set hinzufügen. Sets verhindern automatisch Duplikate.
    await redis.sadd('waitlist_emails', normalizedEmail);

    return NextResponse.json({ message: 'Thank you for joining the waitlist!' });

  } catch (error) {
    console.error('Redis Error:', error);
    return NextResponse.json({ error: 'Something went wrong on our end.' }, { status: 500 });
  }
}