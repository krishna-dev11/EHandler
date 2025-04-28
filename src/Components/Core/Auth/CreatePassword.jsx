import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-4xl flex items-center shadow-lg">
        
        {/* Left Side - Text */}
        <div className="w-1/2">
          {/* Google Logo */}
          <div className="text-3xl text-white font-bold mb-8">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>

          <h1 className="text-4xl text-white font-semibold mb-4">Create a strong password</h1>
          <p className="text-gray-400 text-base">
            Create a strong password with a mixture of letters, numbers and symbols
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex flex-col space-y-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent border border-gray-500 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8AB4F8]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm"
            className="bg-transparent border border-gray-500 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8AB4F8]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 accent-[#8AB4F8]"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show password</span>
          </label>

          <div className="flex justify-end mt-4">
            <button  onClick={()=>navigate("/PhoneVerification")} className="bg-[#8AB4F8] text-black font-medium px-8 py-2 rounded-full hover:bg-[#669df6]">
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

export default CreatePassword;
