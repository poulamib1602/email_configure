const express = require('express');
const router = express.Router();
const User = require('../module/user');

// Fetch all user email addresses from MongoDB
router.get('/emails', async (req, res) => {
  try {
    const users = await User.find({}, 'email');
    const emailAddresses = users.map((user) => user.email);
    res.json(emailAddresses);
  } catch (error) {
    console.error('Error fetching email addresses:', error);
    res.status(500).json({ error: 'Error fetching email addresses' });
  }
});

module.exports = router;
