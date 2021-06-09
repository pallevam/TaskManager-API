const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'vamsipalle95@gmail.com',
//     from: 'vamsipalle95@gmail.com',
//     subject: 'This is my first test email',
//     text: 'This is a test. Do no reply.'
// })


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vamsipalle95@gmail.com',
        subject: 'Welcome to the Task-app',
        text: `Welcome to the app, ${name}. Let us know your review.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vamsipalle95@gmail.com',
        subject: 'Good bye! But why?',
        text: `Good bye friend! Thank you for using our app, ${name}. Could you please let us know why you cancelled your account?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}