import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());

app.post('/api/send', async (req, res) => {
  console.log('Received request for /api/send with body:', req.body);

  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not set. Make sure RESEND_API_KEY is in your .env.local file.');
    return res.status(500).json({ error: { message: 'Server configuration error.' } });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { from, to, subject, html } = req.body;

  try {
    console.log('Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Resend API returned an error:', JSON.stringify(error, null, 2));
      return res.status(400).json({ error });
    }

    console.log('Email sent successfully!', data);
    res.status(200).json({ data });
  } catch (error) {
    console.error('Caught an exception:', error);
    res.status(500).json({ error: { message: error.message || 'An internal server error occurred.' } });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
  if (!process.env.RESEND_API_KEY) {
    console.warn('Warning: RESEND_API_KEY is not defined. The API will not work.');
  }
});
