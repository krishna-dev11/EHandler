import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhoneVerification = () => {
  const [phone, setPhone] = useState('');

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#202124] flex flex-col items-center justify-center relative">
      
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-3xl flex flex-col shadow-lg">
        
        {/* Google Logo */}
        <div className="text-3xl text-white font-bold mb-8">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl text-white font-semibold mb-6">
          Confirm that you're not a robot
        </h1>

        {/* Sub Heading */}
        <p className="text-gray-400 mb-4">Get a verification code sent to your phone</p>

        {/* Input */}
        <div className="flex items-center space-x-2 mb-2">
          {/* Flag Dropdown */}
          <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 bg-transparent">
            <img 
              src="https://flagcdn.com/w40/in.png" 
              alt="India Flag" 
              className="w-5 h-5 mr-2"
            />
            <span className="text-white text-sm">+91</span>
          </div>

          {/* Phone Number Input */}
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-transparent border border-gray-500 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8AB4F8]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mb-6">
          Google will verify this number via SMS (charges may apply).
        </p>

        {/* Next Button */}
        <div className="flex justify-end">
          <button onClick={()=>navigate("/EnterCode")} className="bg-[#8AB4F8] text-black font-medium px-8 py-2 rounded-full hover:bg-[#669df6]">
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full flex justify-between items-center px-8 text-gray-400 text-sm">
        <div>English (United Kingdom)</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>

    </div>
  );
};

export default PhoneVerification;
