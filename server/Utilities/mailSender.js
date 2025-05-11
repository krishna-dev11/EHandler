const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async(email , title , body)=>{
 console.log(email , title , body  , " Inside mailSender")

  try{

    let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    })

    let mailsended = await transporter.sendMail({
        from:'STUDY NOTION || by krishna gothwal',
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`
    })

    console.log(mailsended , "sussefully");
    return mailsended;

  }catch(error){
    console.error(error)
  }

}

