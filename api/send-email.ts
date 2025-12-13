import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const boardMemberEmails = [
  "treasurer@libertyparkferndale.com", // Replace with actual President's email
  "treasurer@libertyparkferndale.com", // Replace with actual Vice-President's email
  "treasurer@libertyparkferndale.com", // Replace with actual Secretary's email
  "treasurer@libertyparkferndale.com", // Replace with actual Treasurer's email
];

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { senderEmail, subject, message } = req.body;

  if (!senderEmail || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields: senderEmail, subject, message' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Liberty Park Contact Form <contact@libertyparkferndale.com>', // IMPORTANT: Replace 'contact@yourdomain.com' with your Resend verified domain email
      to: boardMemberEmails,
      reply_to: senderEmail,
      subject: `[Liberty Park Contact] ${subject}`,
      html: `
        <p><strong>From:</strong> ${senderEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error: any) {
    console.error("Server error:", error);
    return res.status(500).json({ message: 'An unexpected error occurred', error: error.message });
  }
}