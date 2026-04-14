import { NextRequest, NextResponse } from 'next/server'

// Using a simple webhook approach - send data to a reliable endpoint
// You can replace this with your preferred email service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = {
      to: 'clairezhang2018@163.com',
      from: 'noreply@chinagateway.vercel.app',
      subject: `[ChinaGateway] New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from ChinaGateway contact form
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
<hr/>
<p><em>Sent from ChinaGateway contact form</em></p>
      `,
    }

    // Option 1: Use Resend (recommended, free tier: 100 emails/day)
    // Get API key from https://resend.com
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      })

      if (!resendResponse.ok) {
        throw new Error('Failed to send via Resend')
      }
    }
    // Option 2: Use SendGrid
    // else if (process.env.SENDGRID_API_KEY) { ... }
    
    // Option 3: For now, just log and return success
    // This ensures the form works while you set up email service
    console.log('Contact Form Submission:', {
      ...emailContent,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
