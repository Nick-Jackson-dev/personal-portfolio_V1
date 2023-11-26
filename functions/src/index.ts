const functions = require("firebase-functions")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

type dataProps = {
  email: string
  company: string
  message: string
  name: string
}
//if can just use callable function
exports.sendMailToMe = functions.https.onCall(
  async (data: dataProps, context: any) => {
    // Nodemailer setup
    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    let { message, name, email, company } = data
    //   console.log(data)

    // Nodemailer email options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_FORM_ADDRESSEE,
      subject: `!!!Contact form entry from ${name} - with ${company}`,
      text: message,
      html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${message}</p>
    
         </div>`,
    }

    try {
      // Send email
      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }
)
