const nodemailer = require("nodemailer");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const cors = require("cors")
app.use(cors())
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.send("server is running......");
});

app.get("/sendEmail", (req, res) => {
  // const e = req.params.email;
  // console.log(e);
  res.send("hitted");
});
app.post("/sendEmail", jsonParser, (req, res) => {
  
  console.log("hitted to sendEmail");
  console.log(req.body)

  const email = req.body.email;
  const name = req.body.firstName + " " + req.body.lastName;
  const number = req.body.number;
  const msg = `
  Hi, this is ${name} 
   ${req.body.message}
   contact info:
   phone: ${number}
   email: ${email}
   `;
  const path = req.body.file;

  // const tranporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "dcoders00@gmail.com",
  //     pass: "mfhnemtnjingnfkg",
  //   },
  // });

  // const mailOption = {
  //   from: "dcoders00@gmail.com",
  //   to: "tahmimaahmed22@gmail.com",
  //   subject: "mail from form",
  //   text: msg,
  //   // attachments: [{ path: path }],
  // };
  // tranporter.sendMail(mailOption, (err, info) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("email sent " + info.response);
  //   }
  // });
  res.send(path);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running......");
});
