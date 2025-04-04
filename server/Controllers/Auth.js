const OTP = require("../Models/otpSchema");
const user = require("../Models/User");
const otpGenerator = require("otp-generator");
const bcrypt = require('bcrypt');
const profile = require("../Models/profile")
const jwt = require('jsonwebtoken');
require("dotenv").config();



exports.sendOTP = async (req, res) => {
  try {
    // console.log("hi")
    const {email} = req.body;
    console.log(email  ,  "dacdvdsvcdscdc2")

    if (!email) {
      return res.status(401).json({
        success: false,
        message: "enter the email",
      });
    }


    const result = await user.findOne({ email : email });
    console.log(result)
    if (result) {
      return res.status(401).json({
        success: false,
        message:
          "you are already exist in our database so go to login page and make login",
      });
    }

    console.log("dacdvdsvcdscdc2")

    var otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
  

    const sameOtpPresent = await OTP.findOne({ otp: otp });

    console.log("dacdvdsvcdscdc5")

    while (sameOtpPresent) {
      otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      sameOtpPresent = await OTP.findOne({ otp: otp });
    }

    const updateOTP = await OTP.create({ email, otp });



    res.status(200).json({
      success: true,
      message: "entery of otp successfully created in database",
      otp
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        "there should be some error in sending the otp to the user's email",
    });
  }
};


exports.signUP = async (req, res) => {
  try {

    console.log(req.body , "krishna")

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
      dateOfBirth,  
      gender,       
      phoneNo,  // Added phone number
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp ||
      !dateOfBirth ||  
      !gender ||
      !phoneNo  // Check for phone number  
    ) {
      return res.status(401).json({
        success: false,
        message: "Enter all details in signUp form carefully",
      });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password and confirmPassword don't match",
      });
    }

    const checkUser = await user.findOne({ email: email });

    if (checkUser) {
      return res.status(401).json({
        success: false,
        message: "You are already registered with this email. Please login or use another email address.",
      });
    }

    // Find recent OTP from OTP schema
    const recentOtp = await OTP.find({ email: email })
      .sort({ createdAt: -1 })
      .limit(1);

    console.log(recentOtp , "dipanshu");

    if (recentOtp.length === 0) {
      return res.status(400).json({
        success: false,
        message: "OTP is not found",
      });
    } else if (otp !== recentOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "OTP is invalid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create profile with dateOfBirth, gender, and phoneNo
    const profileDetails = await profile.create({
      gender: gender,         
      dateOfBirth: dateOfBirth, 
      about: null,
      contactNumber: phoneNo,  // Store phone number in profile
    });

    // Create the user
    const createUser = await user.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNo,  // Store phone number in user schema
      imageUrl: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      additionalDetails: profileDetails._id,
    });

    console.log("User created successfully");

    return res.status(200).json({
      success: true,
      createUser,
      message: "User signUp successful",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User signUp request failed",
    });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "fill all required details in login form",
      });
    }

  

    const User = await user.findOne({ email: email }).populate("additionalDetails")
    // console.log(User)
    if (!User) {
      return res.status(401).json({
        success: false,
        message:
          "user can't be registerd in our database with these email Address so go though with signUp",
      });
    }

    
    if (await bcrypt.compare(password, User.password )) {
      
      const payload = {
        email: User.email,
        id: User._id,
        accountType: User.accountType,
      };
      // console.log(payload)

      
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      // console.log("token" ,token)


      User.token = token;
      User.password = undefined;
      // console.log(User)

      const options = {
        expiresIn : Date.now(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly:true
      };
     
     return  res.cookie("token", token , options).status(200).json({
        success: true,
        token,
        User,
        message: "User Logged in Successfully",
      });

    
      
     
    } else {
      res.status(401).json({
        success: false,
        message: "Password is Incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `user login request fail  due to some error : ${error}`,
    });
  }
};