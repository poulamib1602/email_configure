const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

//db
require('./db');

// Routes for registration and fetching email addresses
const registrationRoutes = require('./routes/registration');
const emailRoutes = require('./routes/email');
app.use('/register', registrationRoutes);
app.use('/emails', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
