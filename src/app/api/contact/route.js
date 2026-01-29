import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // APP PASSWORD
      },
    });

    await transporter.sendMail({
      from: `"Edunoia Enquiry" <${process.env.GMAIL_USER}>`,
      to: ["nimish.shrimankar@riseit.in", "rahul.gupta@riseit.in"],
      subject: `Contact form Enquiry from ${email}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Message not sent.", error: error.message },
      { status: 500 }
    );
  }
}
