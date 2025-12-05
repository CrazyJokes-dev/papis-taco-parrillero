const express = require('express');
const router = express.Router();

// const nodemailer = require('nodemailer');
// import { Resend } from 'resend';
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
// const emailConfig = require('../../config/email');

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
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  if (smtpHost) {
    try {
      // const transporter = nodemailer.createTransport({
      //   host: process.env.SMTP_HOST,
      //   port: process.env.SMTP_PORT,
      //   secure: process.env.SMTP_SECURE,
      //   auth: {
      //     user: process.env.SMTP_USER,
      //     pass: process.env.SMTP_PASS
      //   },
      //   tls : { rejectUnauthorized: false }
      // });

      // const mailOptions = {
      //   from: `Papi's Taco Parrillero<${}>`,
      //   replyTo: process.env.SMTP_USER,
      //   to: process.env.SMTP_USER,
      //   subject: `Contact form: ${name}`,
      //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`
      // };
      
      // Save email to database
      const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });

      // Send email and save to DB back to back
      await newContact.save();
      resend.emails.send({
        from: 'Papi\'s Taco Parrillero <onboarding@resend.dev>',
        to: 'slayerofdragon52@gmail.com',
        subject: 'Hello World',
        html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong> ${message}`
      });
      // await transporter.sendMail(mailOptions);

      // Send a response msg back to frontend to let user know it was sent
      return res.json({ msg: 'Message sent' });
    } catch (err) {
      // fallthrough to logging response
      console.error('Error sending contact email:', err);
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
    return res.json({msg: 'Message saved to database (email send failed)'});
  } catch (err) {
    console.error('Error saving contact data:', err);
  }

  // If no SMTP configured, log and return success
  console.log('Contact message received:', { name, email, message });
});

module.exports = router;
