import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignUpData } from "../../../Slices/Auth";

const CreateGoogleAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpData } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ActionTaken = (data) => {
    dispatch(setSignUpData({
      firstName: data.FirstName,
      lastName: data.LastName,
    }));
    navigate("/BaiscInfo");
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-[#000000] p-10 rounded-2xl w-full max-w-md shadow-lg">
        {/* Google logo style */}
        <div className="text-3xl font-bold mb-5">
          <span className="text-[#4285F4]">D</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>

        <h2 className="text-white text-2xl font-normal mb-1">Create a Google Account</h2>
        <p className="text-[#9AA0A6] text-sm mb-6">Enter your name</p>

        <form onSubmit={handleSubmit(ActionTaken)} className="space-y-6 mb-8">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First name"
              {...register("FirstName", { required: "Please Enter Your First Name" })}
              className="w-full bg-transparent border border-[#5f6368] rounded-md text-white px-4 py-3 focus:outline-none focus:border-[#8ab4f8] placeholder-[#9aa0a6]"
            />
            {errors.FirstName && <span className="text-red-500 text-sm">{errors.FirstName.message}</span>}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Surname (optional)"
              {...register("LastName", { required: "Please Enter Your Last Name" })}
              className="w-full bg-transparent border border-[#5f6368] rounded-md text-white px-4 py-3 focus:outline-none focus:border-[#8ab4f8] placeholder-[#9aa0a6]"
            />
            {errors.LastName && <span className="text-red-500 text-sm">{errors.LastName.message}</span>}
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#8AB4F8] text-[#202124] text-sm font-medium px-6 py-2 rounded-full hover:bg-[#669df6]"
            >
              Next
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-between text-sm text-[#9AA0A6]">
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
