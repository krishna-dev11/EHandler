import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseGmailAddress = () => {
  const [selected, setSelected] = useState('gothwalkrishna25@gmail.com');

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-2xl shadow-lg">
        {/* Google Logo */}
        <div className="flex items-center mb-8">
          <div className="text-3xl text-white font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl text-white font-semibold mb-2">Choose your Gmail address</h1>
        <p className="text-gray-400 mb-8">Pick a Gmail address or create your own</p>

        {/* Options */}
        <div className="space-y-6 mb-8">
          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-[#8AB4F8] w-5 h-5"
              name="gmail"
              value="krishnagothwal72@gmail.com"
              checked={selected === 'krishnagothwal72@gmail.com'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-white text-lg">krishnagothwal72@gmail.com</span>
          </label>

          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-[#8AB4F8] w-5 h-5"
              name="gmail"
              value="gothwalkrishna25@gmail.com"
              checked={selected === 'gothwalkrishna25@gmail.com'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-white text-lg">gothwalkrishna25@gmail.com</span>
          </label>

          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-[#8AB4F8] w-5 h-5"
              name="gmail"
              value="create"
              checked={selected === 'create'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-white text-lg">Create your own Gmail address</span>
          </label>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center">
          <a href="#" className="text-[#8AB4F8] hover:underline text-sm">
            Use your existing email
          </a>
          <button onClick={()=>navigate("/CreatePassword")} className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6]">
            Next
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-sm text-gray-400 mt-8">
          <div>English (United Kingdom)</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseGmailAddress;
