const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'sabnekarvineel862@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

// @route   POST /api/contact
// @desc    Send a contact message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    const savedMessage = await newMessage.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'sabnekarvineel862@gmail.com',
      to: process.env.EMAIL_USER || 'sabnekarvineel862@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Email error:', err);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.json(savedMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
