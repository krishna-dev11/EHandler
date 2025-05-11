const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
      dateOfBirth:{
        type:String,
    },
  additionalEmail: {
    type: String,
    required: false,
  },
  contactNumber: {
    type: String,
    required: false,
  },
  countryCode: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  approved: {
    type: Boolean,
    default: true,
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
    required: true,
  },
  // For password reset
  token: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
