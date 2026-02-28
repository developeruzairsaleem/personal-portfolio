import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Add RESEND_API_KEY to your .env.local file
// Get free API key at: https://resend.com (3,000 emails/month free)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.log('Contact form submission (no RESEND_API_KEY set):', { name, email, message })
      return NextResponse.json({ success: true, message: 'Message received (dev mode)' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['uzairsaleemdev@gmail.com'],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #22c55e33;">
          <h2 style="color: #22c55e; margin-top: 0;">New Portfolio Inquiry</h2>
          <p style="color: #999; margin-bottom: 24px;">Someone reached out via uzairsaleem.dev</p>
          
          <div style="background: #111; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="color: #888; margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
            <p style="color: #fff; margin: 0; font-size: 16px; font-weight: 600;">${name}</p>
            <p style="color: #22c55e; margin: 4px 0 0; font-size: 14px;">${email}</p>
          </div>

          <div style="background: #111; padding: 20px; border-radius: 8px;">
            <p style="color: #888; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #ddd; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #555; font-size: 12px; margin-top: 24px; margin-bottom: 0;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message. Please email directly.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
