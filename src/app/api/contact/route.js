// src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    console.log("📧 Contact API called at:", new Date().toISOString());

    const { name, email, phone, message } = await request.json();
    console.log("Received data:", { name, email, phone, message });

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        {
          message:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 },
      );
    }

    // Check environment variables (important for Netlify)
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("❌ Missing Gmail credentials in environment variables");
      return Response.json(
        {
          message: "Server configuration error",
          error: "Email service not configured",
        },
        { status: 500 },
      );
    }

    console.log("✅ Environment variables found, setting up transporter...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify connection
    console.log("🔧 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // Receiver emails - ADD YOUR EMAILS HERE
    const receiverEmails = [
      "info@abnd.in",
      "info@riseit.com",
      // Add more emails as needed
    ];

    const mailOptions = {
      from: `"Edunoia Contact Form" <${process.env.GMAIL_USER}>`,
      to: receiverEmails,
      subject: `Edunoia Enquiry from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">Edunoia Enquiry</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the Edunoia contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    console.log("📤 Sending email to:", receiverEmails);
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    return Response.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
        messageId: info.messageId,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("❌ Email sending error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  }
}

// Add OPTIONS method for CORS preflight (REQUIRED for Netlify)
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
