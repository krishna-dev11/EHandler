import React, { useState, useEffect } from 'react';

const EnterCode = () => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="min-h-screen bg-[#202124] flex flex-col items-center justify-center relative">
      
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-4xl flex flex-col md:flex-row justify-between items-start shadow-lg">

        {/* Left Side */}
        <div className="mb-8 md:mb-0">
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
          <h1 className="text-4xl text-white font-semibold">Enter the code</h1>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          {/* Subtext */}
          <p className="text-gray-400 mb-4">
            Enter the 6-digit verification code to confirm that you received the text message
          </p>

          {/* Input Field */}
          <div className="relative mb-6">
            <label className="absolute text-blue-400 text-sm px-2 -top-3 left-3 bg-[#1E1E1E]">
              Enter code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-[#8AB4F8] rounded-md bg-transparent p-4 text-white focus:outline-none"
              placeholder="G-"
            />
          </div>

          {/* Timer or Get new code */}
          <p className={`text-gray-500 mb-6 ${timer > 0 ? 'cursor-not-allowed' : 'cursor-pointer hover:underline'}`}>
            {timer > 0 ? `Get new code (${timer} seconds)` : 'Get new code'}
          </p>

          {/* Next Button */}
          <div className="flex justify-end">
            <button className="bg-[#8AB4F8] text-black font-medium px-8 py-2 rounded-full hover:bg-[#669df6]">
              Next
            </button>
          </div>
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

export default EnterCode;
