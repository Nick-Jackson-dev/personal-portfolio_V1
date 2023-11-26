const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, ".env") })

const app = express()
const port = 8000

// Middleware to parse JSON in the request body
app.use(bodyParser.json())

// Enable CORS with specific options
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust this to your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (cookies, Authorization headers, etc.)
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
)

// Nodemailer setup
var transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

// Example route for sending an email
app.post("/send-email", async (req, res) => {
  let { message, name, email, company } = req.body
  //   console.log(req.body)

  // Nodemailer email options
  const mailOptions = {
    from: email,
    to: process.env.CONTACT_FORM_ADDRESSEE,
    subject: `!!!someone is reaching out from your portfolio${name} - with ${company}`,
    text: message,
    html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Message Delivered from your protolio contact form</h2>
        <p><strong>The contact said their email is</strong>: ${email}</p>
        <p><strong>The contact said their name is</strong>: ${name}</p>
        <p><strong>they say they are working at</strong>: ${company}</p>
        <p><strong>There message is</strong>:</p>
        <p>${message}</p>
         </div>`,
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions)

    // Respond with a success message (adjust as needed)
    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    // Respond with an error message (adjust as needed)
    res.status(500).json({ error: "Error sending email" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
