import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // MUST be true for port 465
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password
      },
    });

    // Verify transporter (helps catch env issues on Netlify)
    await transporter.verify();

    await transporter.sendMail({
      from: `"Edunoia Enquiry" <${process.env.GMAIL_USER}>`,
      to: [
        "nimish.shrimankar@riseit.in",
        "info@test.com",
      ],
      subject: `Contact form enquiry from ${email}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
        <h3>New Contact Form Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        message: "Message not sent",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
