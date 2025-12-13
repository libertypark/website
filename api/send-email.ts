import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// IMPORTANT: Replace these with the actual email addresses for each board member role.
const boardMemberEmailsMap: Record<string, string> = {
  "President": "president@libertyparkferndale.com", // Placeholder - Update this!
  "Vice-President": "vicepresident@libertyparkferndale.com", // Placeholder - Update this!
  "Secretary": "secretary@libertyparkferndale.com", // Placeholder - Update this!
  "Treasurer": "treasurer@libertyparkferndale.com",
};

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { senderEmail, subject, message, recipients } = req.body; // Changed 'recipient' to 'recipients'

  if (!senderEmail || !subject || !message || !recipients || recipients.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: senderEmail, subject, message, or no recipients selected.' });
  }

  const recipientEmails: string[] = [];
  const invalidRecipients: string[] = [];

  (recipients as string[]).forEach(role => {
    const email = boardMemberEmailsMap[role];
    if (email) {
      recipientEmails.push(email);
    } else {
      invalidRecipients.push(role);
    }
  });

  if (recipientEmails.length === 0) {
    return res.status(400).json({ message: 'No valid recipients selected.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Liberty Park Contact Form <contact@libertyparkferndale.com>', // IMPORTANT: Replace 'contact@yourdomain.com' with your Resend verified domain email
      to: recipientEmails, // Send to all selected recipients
      reply_to: senderEmail,
      subject: `[Liberty Park Contact] ${subject}`, // Simplified subject for multiple recipients
      html: `
        <p><strong>From:</strong> ${senderEmail}</p>
        <p><strong>To:</strong> ${recipients.join(', ')}</p>
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