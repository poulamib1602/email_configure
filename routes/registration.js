const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../module/user');

// Registration route
router.post('/register', async (req, res) => {
  const { name, email } = req.body;

  const newUser = new User({ name, email });
  await newUser.save();

  // Send confirmation email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail' or 'Outlook'
    auth: {
      user: 'poulamib.albiorix@gmail.com',
      pass: 'xxx',
    }
  });

  const mailOptions = {
    from: 'poulamib.albiorix@gmail.com',
    to: email,
    subject: 'Registration Confirmation',
    text: `Thank you for registering, ${name}!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email send error:', error);
      res.status(500).json({ error: 'Email sending failed' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Registration successful. Confirmation email sent.' });
    }
  });
});

module.exports = router;
