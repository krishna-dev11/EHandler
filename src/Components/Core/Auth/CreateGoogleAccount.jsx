import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGoogleAccount = () => {

    const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center">
      <div className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-md shadow-lg">
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
        <h1 className="text-2xl text-white font-semibold mb-2">Create a Google Account</h1>
        <p className="text-gray-400 mb-6">Enter your name</p>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-1">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              defaultValue="Krishna"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Surname (optional)</label>
            <input
              type="text"
              placeholder="Surname"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              defaultValue="GOTHWAL"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button  onClick={()=>navigate("/BaiscInfo")} className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6]">
            Next
          </button>
        </div>

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

export default CreateGoogleAccount;
