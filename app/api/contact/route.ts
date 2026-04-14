import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

    // 1. Save to database
    let savedMessage
    try {
      savedMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          subject,
          message,
          status: 'pending',
        },
      })
      console.log('Message saved to database:', savedMessage.id)
    } catch (dbError) {
      console.error('Database save error:', dbError)
      // Continue even if DB fails - email is more important
    }

    // 2. Send email via 163 SMTP
    const smtpHost = process.env.SMTP_HOST || 'smtp.163.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpUser = process.env.SMTP_USER // 你的163邮箱
    const smtpPass = process.env.SMTP_PASS // 你的163授权码

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: true, // use SSL
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const mailOptions = {
        from: `"ChinaGateway" <${smtpUser}>`,
        to: 'clairezhang2018@163.com', // 你的接收邮箱
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

      try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent:', info.messageId)
        
        // Update database status if save was successful
        if (savedMessage) {
          await prisma.contactMessage.update({
            where: { id: savedMessage.id },
            data: { status: 'sent' },
          })
        }

        return NextResponse.json(
          { success: true, message: 'Message sent successfully' },
          { status: 200 }
        )
      } catch (emailError) {
        console.error('Email send error:', emailError)
        
        // Update database status
        if (savedMessage) {
          await prisma.contactMessage.update({
            where: { id: savedMessage.id },
            data: { status: 'email_failed' },
          })
        }

        // Still return success if saved to DB, but warn about email
        if (savedMessage) {
          return NextResponse.json(
            { 
              success: true, 
              warning: 'Message saved but email delivery failed. Please check database.',
              id: savedMessage.id 
            },
            { status: 200 }
          )
        }
        
        return NextResponse.json(
          { error: 'Failed to send message. Please try again later.' },
          { status: 500 }
        )
      }
    } else {
      // SMTP not configured, just save to DB
      console.log('SMTP not configured, message saved to database only')
      return NextResponse.json(
        { 
          success: true, 
          warning: 'Message saved. Email not configured yet.',
          id: savedMessage?.id 
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
