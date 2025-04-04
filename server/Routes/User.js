const express = require("express")
const router = express.Router();



const { sendOTP , signUP ,  login } = require('../Controllers/Auth')
 

// Auth Routes
router.post('/sendOTP' ,  sendOTP)
router.post('/signUP' ,  signUP)
router.post('/login' ,  login)


module.exports = router