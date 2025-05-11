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
    console.log(req.body, "signUp data");

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
      gender,
      additionalEmail,
      day,
      month,
      year,
    } = req.body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp ||
      !gender ||
      !day ||
      !month ||
      !year ||
      !additionalEmail
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match.",
      });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email.",
      });
    }

    const recentOtp = await OTP.find({ email: additionalEmail }).sort({ createdAt: -1 }).limit(1);
    if (recentOtp.length === 0 || otp !== recentOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Format date as YYYY-MM-DD
    const formattedDate = `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

    const profileDetails = await profile.create({
      gender,
      dateOfBirth: formattedDate,
      about: null,
      contactNumber: "",
      countryCode: "",
    });

    const newUser = await user.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      dateOfBirth: formattedDate,
      imageUrl: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      additionalEmail,
      accountType: accountType || "Student",
      additionalDetails: profileDetails._id,
    });

    console.log("✅ User created:", newUser._id);

    return res.status(200).json({
      success: true,
      user: newUser,
      message: "User sign-up successful!",
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error during sign-up",
      error: error.message,
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