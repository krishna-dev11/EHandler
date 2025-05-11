const mongoose = require("mongoose");
const emailTemplate = require("../mail/emailVerificationEmail")
const {mailSender} = require("../Utilities/mailSender")

const otpSchema = new mongoose.Schema({
     email:{
        type:String,
        required:true
     },
     otp:{
        type:String,
        required:true
     },
     createdAt:{
        type:Date,
        default:Date.now(),
        expires: 60 * 5
     }

})



const sendVerificationEmail = async(email , otp)=>{

   console.log(email , otp , " Inside the sendVerificationEmail")
    try{
       await mailSender(email , `Verification mail ` , emailTemplate(otp));
    }catch(error){
       console.error(error);
    }
}

otpSchema.pre("save" , async function(next){
    try{
        console.log(this.email , this.otp)
        await sendVerificationEmail(this.email , this.otp)
        next()

    } catch(error){
        console.log("error in sending the email by function call")
    }


})


module.exports = mongoose.model("OTP" , otpSchema);
