const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const emailConfig = require('../../config/email');

// Load Contact model
const Contact = require('../../models/Contacts');


// GET /api/contact
// Description: Gets all contact messages (for admin/testing purposes)
// Also sends the contact message via email since SMTP is configured
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find({})
    return res.status(200).json({
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

// POST /api/contact
// Body: { name, email, message }
router.post('/addContact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email and message.' });
  }

  // If SMTP configuration is available, try to send an email.
  // Configure via environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
  const smtpHost = emailConfig.emailConfig.host;
  if (smtpHost) {
    try {
      const transporter = nodemailer.createTransport({
        host: emailConfig.emailConfig.host,
        port: emailConfig.emailConfig.port,
        secure: emailConfig.emailConfig.secure,
        auth: {
          user: emailConfig.emailConfig.user,
          pass: emailConfig.emailConfig.pass
        },
        tls : { rejectUnauthorized: false }
      });

      const mailOptions = {
        from: `Papi's Taco Parrillero<${emailConfig.emailConfig.user}>`,
        replyTo: emailConfig.emailConfig.user,
        to: emailConfig.emailConfig.user,
        subject: `Contact form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      };
      
      // Save email to database
      const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });

      // Send email and save to DB back to back
      await newContact.save();
      await transporter.sendMail(mailOptions);

      // Send a response msg back to frontend to let user know it was sent
      return res.json({ msg: 'Message sent' });
    } catch (err) {
      // fallthrough to logging response
      console.error('Error sending contact email:', err);
      return res.json({msg: 'Message saved to database (email send failed)'});
    }
  }

  // Save to database
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await newContact.save();
    return res.json({ msg: 'Message received (no SMTP configured)' });
  } catch (err) {
    console.error('Error saving contact data:', err);
  }

  // If no SMTP configured, log and return success
  console.log('Contact message received:', { name, email, message });
});

module.exports = router;
