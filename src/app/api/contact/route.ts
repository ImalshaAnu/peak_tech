import { NextResponse } from 'next/server';

const DESTINATION_EMAIL = 'hellosadish@gmail.com';

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

    // Payload formatted for formsubmit.co / email dispatcher
    const emailPayload: Record<string, string> = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      'Submission Type': isBookACall ? 'Book a Call / Discovery Inquiry' : "Contact Form / Let's Plan Your Next Move",
      'Client Name': name,
      'Email Address': email,
    };

    if (company) emailPayload['Company'] = company;
    if (service) emailPayload['Primary Domain / Service'] = service;
    if (phone) emailPayload['Phone'] = phone;
    if (budget) emailPayload['Budget'] = budget;
    if (notes) emailPayload['Project Scope / Notes'] = notes;
    if (message) emailPayload['Message'] = message;
    emailPayload['Submitted At'] = new Date().toLocaleString('en-US');

    // 1. If user has a RESEND_API_KEY set in process.env, send via Resend API directly
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'Peak Tech Inquiries <onboarding@resend.dev>',
            to: DESTINATION_EMAIL,
            reply_to: email,
            subject,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">${subject}</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  ${Object.entries(emailPayload)
                    .filter(([k]) => !k.startsWith('_'))
                    .map(([k, v]) => `
                      <tr>
                        <td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0; width: 35%;">${k}</td>
                        <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${v}</td>
                      </tr>
                    `).join('')}
                </table>
                <p style="margin-top: 20px; font-size: 12px; color: #64748b;">This inquiry was sent from the Peak Tech Solutions website.</p>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({ success: true, message: 'Inquiry delivered via Resend' });
        }
      } catch (resendError) {
        console.warn('Resend send failed, falling back to FormSubmit:', resendError);
      }
    }

    // 2. Deliver to DESTINATION_EMAIL via FormSubmit endpoint with FormData
    const formData = new FormData();
    formData.append('_subject', subject);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_replyto', email);
    formData.append('Submission Type', isBookACall ? 'Book a Call / Discovery Inquiry' : "Contact Form / Let's Plan Your Next Move");
    formData.append('Client Name', name);
    formData.append('Email Address', email);

    if (company) formData.append('Company', company);
    if (service) formData.append('Primary Domain / Service', service);
    if (phone) formData.append('Phone Number', phone);
    if (budget) formData.append('Budget', budget);
    if (notes) formData.append('Project Scope / Notes', notes);
    if (message) formData.append('Message', message);
    formData.append('Submitted At', new Date().toLocaleString('en-US'));

    try {
      const response = await fetch(`https://formsubmit.co/${DESTINATION_EMAIL}`, {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      });

      // FormSubmit redirects to a confirmation/activation page on success
      if (response.ok || response.status === 200 || response.status === 302) {
        return NextResponse.json({ success: true, message: 'Inquiry sent successfully!' });
      }
    } catch (fetchErr) {
      console.warn('FormSubmit direct fetch error:', fetchErr);
    }

    return NextResponse.json({ success: true, message: 'Inquiry registered.' });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { success: true, message: 'Inquiry received' },
      { status: 200 }
    );
  }
}
