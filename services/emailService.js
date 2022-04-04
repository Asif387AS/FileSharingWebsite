const nodemailer=require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();

// get SMTP Service from sendinblue;
const sendEmail=async({to,from,subject,text,html})=>{

    let transporter=nodemailer.createTransport({


  // host:process.env.SMTP_HOST,
  // port:process.env.SMTP_PORT,
  // host:'smtp-relay.sendinblue.com',
  // port:587,
  // secure:false,
  service:'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL

  auth:{
      // user:process.env.MAIL_USER,
      // pass:process.env.MAIL_PASS,
      // user:'asifalikodhanjutt3@gmail.com',
      // pass:'dLUg7MH49OFzkGQr'
      user:'asifalikodhanjutt3@gmail.com',
      pass:'5420zahoor'
  }
})

  let info=await transporter.sendMail({
      from:`codewithasif <${from}>`,
        to,
        subject,
        text,
        html
  })
console.log(info)
}

module.exports=sendEmail;