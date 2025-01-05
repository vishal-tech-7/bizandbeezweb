const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
res.send("welcome")
});

app.post('/contact', (req, res) => {
  const { name, email, mobile, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'connect@bizandbeez.com',
      pass: 'yevsvwveumfztnt'
    }
  });

  const mailOptions = {
    from: email, // user's email address
    to: 'connect@bizandbeez.com',
    subject: 'Form Submission from coutrymall landing page',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully!');
    res.redirect('/')
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});