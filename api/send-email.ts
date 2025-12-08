import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { recipients, subject, message } = request.body;

  if (!recipients || !subject || !message) {
    return response.status(400).json({ message: 'Missing required fields: recipients, subject, or message.' });
  }

  // In a real application, you would map recipient IDs to actual email addresses
  // For this example, we'll assume recipients are already email addresses or can be mapped.
  // Let's define a simple mapping for demonstration.
  const boardMemberEmails: Record<string, string> = {
    "president": "president@libertyparkferndale.com", // Replace with actual emails
    "vice-president": "vicepresident@libertyparkferndale.com", // Replace with actual emails
    "secretary": "secretary@libertyparkferndale.com", // Replace with actual emails
    "treasurer": "treasurer@libertyparkferndale.com", // Replace with actual emails
  };

  const toEmails = recipients.map((id: string) => boardMemberEmails[id]).filter(Boolean);

  if (toEmails.length === 0) {
    return response.status(400).json({ message: 'No valid recipients selected.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email from Resend
      to: toEmails,
      subject: `Liberty Park Contact Form: ${subject}`,
      html: `<p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return response.status(500).json({ message: 'Failed to send email.', error: error.message });
    }

    return response.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error: any) {
    console.error('Server error:', error);
    return response.status(500).json({ message: 'An unexpected error occurred.', error: error.message });
  }
}