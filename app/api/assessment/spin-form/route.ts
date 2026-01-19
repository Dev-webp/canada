import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, prize } = await request.json();

    // 1. Send to ADMIN
    await transporter.sendMail({
      from: `"VJC Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `🎉 Winner Alert: ${name} won ${prize}`,
      text: `New Winner Details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPrize Won: ${prize}\n\nTime: ${new Date().toLocaleString('en-IN')}`,
    });

    // 2. Send to USER
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Congratulations ${name}! You won the ${prize}! 🎁`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 2px solid #fbbf24; border-radius: 15px;">
          <h2 style="color: #fbbf24;">YOU WON!</h2>
          <p>Hi ${name}, you spun the wheel and won a <strong>${prize}</strong>!</p>
          <p>Our team will contact you on <b>${phone}</b> shortly to help you claim it.</p>
          <br/>
          <a href="https://wa.me/919876543210" style="background: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Claim on WhatsApp</a>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">VJC Overseas - Canada PR Specialists</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mail system error:', err);
    return NextResponse.json({ error: 'Failed to send mails' }, { status: 500 });
  }
}