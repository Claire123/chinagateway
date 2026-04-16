import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory storage for demo
const bookings: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      hospitalId,
      hospitalName,
      specialty,
      preferredDoctor,
      symptoms,
      date,
      time 
    } = body

    // Validate required fields
    if (!name || !email || !phone || !hospitalId || !specialty || !date || !time) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      hospitalId,
      hospitalName,
      specialty,
      preferredDoctor: preferredDoctor || 'Not specified',
      symptoms: symptoms || 'Not specified',
      date,
      time,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)
    console.log('New booking:', booking)

    // Send email notification
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

        await transporter.sendMail({
          from: `"ChinaGateway" <${smtpUser}>`,
          to: 'contactus@chinagateway.it.com',
          subject: `[ChinaGateway] New Appointment Request - ${name}`,
          html: `
            <h2>New Medical Appointment Request</h2>
            <p><strong>Patient:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr/>
            <p><strong>Hospital:</strong> ${hospitalName}</p>
            <p><strong>Specialty:</strong> ${specialty}</p>
            <p><strong>Preferred Doctor:</strong> ${preferredDoctor || 'Not specified'}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <hr/>
            <p><strong>Symptoms:</strong></p>
            <p>${symptoms || 'Not specified'}</p>
            <hr/>
            <p><em>Sent from ChinaGateway Healthcare</em></p>
          `,
        })

        booking.status = 'notified'
      } catch (emailError) {
        console.error('Email send error:', emailError)
        booking.status = 'email_failed'
      }
    }

    return NextResponse.json(
      { success: true, booking },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ bookings }, { status: 200 })
}
