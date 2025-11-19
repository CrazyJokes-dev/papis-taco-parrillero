const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact
// Body: { name, email, message }
router.post('/', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email and message.' });
  }

  // If SMTP configuration is available, try to send an email.
  // Configure via environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
  const smtpHost = process.env.SMTP_HOST;
  if (smtpHost) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        } : undefined
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || `no-reply@${req.hostname}`,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        subject: `Contact form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      };

      await transporter.sendMail(mailOptions);
      return res.json({ msg: 'Message sent' });
    } catch (err) {
      console.error('Error sending contact email:', err);
      // fallthrough to logging response
    }
  }

  // If no SMTP configured, log and return success
  console.log('Contact message received:', { name, email, message });
  return res.json({ msg: 'Message received (no SMTP configured)' });
});

module.exports = router;
