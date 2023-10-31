const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../module/user');
router.post('/register', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email_user_id,
      pass: process.env.email_user_id_pass,
    }
  });
  const mailOptions = {
    from: process.env.email_user_id,
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
