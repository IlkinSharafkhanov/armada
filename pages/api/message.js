const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}\r\n
  `
  const data = {
    to: 'ilkinsharafkhanov222@gmail.com',
    from: 'hello@armada.net',
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data)

  res.status(200).json({ status: 'Ok' })
}
