const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
app.use(bodyParser.json());
require('./db');
const registrationRoutes = require('./routes/registration');
const emailRoutes = require('./routes/email');
app.use('/register', registrationRoutes);
app.use('/emails', emailRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
