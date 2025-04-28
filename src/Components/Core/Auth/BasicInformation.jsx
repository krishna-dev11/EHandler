import React from "react";
import { useNavigate } from "react-router-dom";

export default function BasicInformation() {

  const navigate = useNavigate()


  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="bg-[#1E1E1E] rounded-2xl p-8 w-full max-w-4xl shadow-lg flex flex-col md:flex-row md:justify-between">
        {/* Left Section: Heading and Subheading */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          {/* Google Logo */}
          <div className="flex items-center text-5xl font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-white">Basic information</h1>
          <p className="text-gray-400">Enter your birthday and gender</p>
        </div>

        {/* Right Section: Form */}
        <form className="flex flex-col space-y-4 w-full md:max-w-md">
          {/* Date of Birth */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Day"
              className="w-1/3 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="w-1/3 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              {/* Add more months here */}
            </select>
            <input
              type="text"
              placeholder="Year"
              className="w-1/3 bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender Selection */}
          <select
            className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Why we ask link */}
          <a href="#" className="text-blue-400 text-sm hover:underline">
            Why we ask for birthday and gender
          </a>

          {/* Next Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={()=>navigate("/ChooseGmailAddress")}
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 flex flex-col items-center w-full text-gray-400 text-xs space-y-2">
        <div>English (United Kingdom)</div>
        <div className="flex space-x-4">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}