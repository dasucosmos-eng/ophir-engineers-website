import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send an email notification using a service like SendGrid, Nodemailer, etc.
    // 2. Store the inquiry in a database
    // 3. Send an auto-reply to the customer

    // For now, just log the submission (server-side only)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'N/A',
      subject: subject || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry. We will get back to you shortly.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
