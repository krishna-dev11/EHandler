const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{    
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true    
    },
    approved:{
        type:Boolean,
        default:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"profile"
    },
    
    // addition in reset password code
    token:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    }


},
{timestamps : true}
);

module.exports = mongoose.model("user" , userSchema);