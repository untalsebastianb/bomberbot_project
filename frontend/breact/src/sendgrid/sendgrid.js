//configuration send grid
const sendGridAPIKey = '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';
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(sendGridAPIKey)

const msg = {
  to: 'somarae8@gmail.com', // Change to your recipient
  from: '1493@holbertonschool.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
