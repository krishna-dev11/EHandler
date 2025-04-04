const mongoose = require("mongoose");
require("dotenv").config();  // ✅ Ensure dotenv is loaded

exports.dbconnect = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGO_URI); // 🔍 Debugging ke liye

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};
