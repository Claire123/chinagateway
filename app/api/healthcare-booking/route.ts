import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory storage
const healthcareBookings: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      phone, 
      email,
      serviceType,
      institution,
      doctor,
      date,
      notes,
      isCustom
    } = body

    // Validate required fields
    if (!name || !phone || !serviceType || !date) {
      return NextResponse.json(
        { error: '请填写必填项' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = {
      id: Date.now().toString(),
      name,
      phone,
      email: email || '',
      serviceType,
      institution: institution || '未指定',
      doctor: doctor || '未指定',
      date,
      notes: notes || '',
      isCustom: isCustom || false,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    healthcareBookings.push(booking)
    console.log('New healthcare booking:', booking)

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
          to: 'clairezhang2018@163.com',
          subject: `[ChinaGateway] 新的${serviceType}预约 - ${name}`,
          html: `
            <h2>新的医疗服务预约</h2>
            <p><strong>服务类型:</strong> ${serviceType}</p>
            <p><strong>客户姓名:</strong> ${name}</p>
            <p><strong>联系电话:</strong> ${phone}</p>
            <p><strong>电子邮箱:</strong> ${email || '未提供'}</p>
            <hr/>
            <p><strong>预约机构:</strong> ${institution || '未指定'}</p>
            <p><strong>指定医生:</strong> ${doctor || '未指定'}</p>
            <p><strong>期望日期:</strong> ${date}</p>
            <p><strong>自定义预约:</strong> ${isCustom ? '是' : '否'}</p>
            <hr/>
            <p><strong>备注需求:</strong></p>
            <p>${notes || '无'}</p>
            <hr/>
            <p><em>发送自 ChinaGateway Healthcare</em></p>
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
    console.error('Healthcare booking error:', error)
    return NextResponse.json(
      { error: '预约提交失败' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ bookings: healthcareBookings }, { status: 200 })
}
