import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory storage for demo (will reset on server restart)
const messages: any[] = []

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

    // 1. Save to in-memory storage (with timestamp)
    const messageData = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    messages.push(messageData)
    console.log('Message saved:', messageData)

    // 2. Send email via 163 SMTP
    const smtpHost = process.env.SMTP_HOST || 'smtp.163.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        const mailOptions = {
          from: `"ChinaGateway" <${smtpUser}>`,
          to: 'clairezhang2018@163.com',
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

        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent:', info.messageId)
        
        // Update status
        messageData.status = 'sent'

        return NextResponse.json(
          { success: true, message: 'Message sent successfully' },
          { status: 200 }
        )
      } catch (emailError) {
        console.error('Email send error:', emailError)
        messageData.status = 'email_failed'
        
        // Return success but with warning (data is saved)
        return NextResponse.json(
          { 
            success: true, 
            warning: 'Message saved but email delivery failed. Please check logs.',
            id: messageData.id 
          },
          { status: 200 }
        )
      }
    } else {
      // SMTP not configured, just save
      console.log('SMTP not configured, message saved only')
      return NextResponse.json(
        { 
          success: true, 
          warning: 'Message saved. Email not configured yet.',
          id: messageData.id 
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again later.' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve messages (for admin)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  return NextResponse.json({ messages }, { status: 200 })
}
