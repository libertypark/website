import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { recipients, subject, message } = req.body;

  if (!recipients || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields: recipients, subject, or message' });
  }

  // In a real application, you would map recipient IDs to actual email addresses
  // For this example, we'll use placeholder emails or map to known board member emails
  const boardMemberEmails: Record<string, string> = {
    "president": "president@libertyparkferndale.com",
    "vice-president": "vicepresident@libertyparkferndale.com",
    "secretary": "secretary@libertyparkferndale.com",
    "treasurer": "treasurer@libertyparkferndale.com",
  };

  const toEmails = recipients.map((id: string) => boardMemberEmails[id]).filter(Boolean);

  if (toEmails.length === 0) {
    return res.status(400).json({ message: 'No valid recipients selected' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified Resend domain email
      to: toEmails,
      subject: subject,
      html: `<p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error: any) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}