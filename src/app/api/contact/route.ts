import { NextResponse } from 'next/server';

const DESTINATION_EMAIL = process.env.CONTACT_EMAIL || 'hellosadish@gmail.com';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      formType, 
      name, 
      email, 
      company, 
      service, 
      notes, 
      phone, 
      budget, 
      message 
    } = data;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const isBookACall = formType === 'book_a_call';
    const subject = isBookACall
      ? `[Peak Tech Inquiry] Discovery Call Request from ${name}${company ? ` (${company})` : ''}`
      : `[Peak Tech Inquiry] New Contact Message from ${name}`;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { success: false, message: 'Resend API key is not configured.' },
        { status: 500 }
      );
    }

    const emailPayload: Record<string, string> = {
      'Submission Type': isBookACall ? 'Book a Call / Discovery Inquiry' : "Contact Form / Let's Plan Your Next Move",
      'Client Name': name,
      'Email Address': email,
    };

    if (company) emailPayload['Company'] = company;
    if (service) emailPayload['Primary Domain / Service'] = service;
    if (phone) emailPayload['Phone Number'] = phone;
    if (budget) emailPayload['Budget'] = budget;
    if (notes) emailPayload['Project Scope / Notes'] = notes;
    if (message) emailPayload['Message'] = message;
    emailPayload['Submitted At'] = new Date().toLocaleString('en-US');

    const fromAddress = process.env.EMAIL_FROM || 'Peak Tech Inquiries <onboarding@resend.dev>';

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey.trim()}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: DESTINATION_EMAIL,
        reply_to: email,
        subject,
        html: `
          <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <div style="border-bottom: 2px solid #00f2fe; padding-bottom: 12px; margin-bottom: 18px;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 20px;">${subject}</h2>
              <span style="display: inline-block; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #0284c7; font-weight: bold;">
                ${isBookACall ? 'Priority Call Request' : 'Direct Inquiry'}
              </span>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
              ${Object.entries(emailPayload)
                .map(([k, v]) => `
                  <tr>
                    <td style="padding: 10px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0; width: 35%; color: #334155;">${k}</td>
                    <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #0f172a;">${v}</td>
                  </tr>
                `).join('')}
            </table>
            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              This inquiry was delivered securely via Resend API.
            </p>
          </div>
        `,
      }),
    });

    const resendData = await resendRes.json().catch(() => null);

    if (!resendRes.ok) {
      console.error('Resend API error:', resendData);
      return NextResponse.json(
        { 
          success: false, 
          message: resendData?.message || 'Resend failed to deliver the email.' 
        },
        { status: resendRes.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry delivered successfully via Resend!',
      id: resendData?.id
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Error in Resend contact route:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Server error delivering inquiry' },
      { status: 500 }
    );
  }
}
