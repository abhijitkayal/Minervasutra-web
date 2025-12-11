// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// IMPORTANT: Replace these environment variables with your actual sender details.
// On Vercel, you must set these environment variables in your project settings.

// Example: Using a Gmail account (requires "App Password" enabled in Google Security settings)
const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'sendgrid', etc.
    auth: {
        user: process.env.EMAIL_USER, // Your sending email address (e.g., info@yourdomain.com)
        pass: process.env.EMAIL_PASS, // Your App Password or SMTP password
    },
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { fullName, email, company, companySize, message } = body;

        // Basic validation
        if (!fullName || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
        }

        // --- Compose the Email ---
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'your-recipient-email@example.com', // <-- REPLACE with the email you want to receive the messages
            subject: `New Contact Form Submission from ${fullName} (HRMS Site)`,
            html: `
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                ${companySize ? `<p><strong>Company Size:</strong> ${companySize}</p>` : ''}
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success! Your message has been sent.' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send message.', error: error.message }, { status: 500 });
    }
}