import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { sendOtp } from '../../../Services.jsx/Operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpData } from '../../../Slices/Auth';

const EmailVerification = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const {signUpData} = useSelector(state=>state.auth)
    console.log(signUpData)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const enteredEmail = data.additionalEmail;
    console.log(enteredEmail)

    if (!enteredEmail) {
      toast.error("Please enter an email address.");
      return;
    }

    const event = {
      ...signUpData ,
      additionalEmail : enteredEmail
    }

    dispatch(setSignUpData(event))

    // Send OTP to the entered email
    dispatch(sendOtp( enteredEmail , navigate ));
    toast.success(`OTP sent to ${enteredEmail}`);
    navigate("/EnterCode");
  };

  return (
    <div className="min-h-screen bg-[#202124] flex flex-col items-center justify-center relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1E1E1E] p-8 rounded-2xl w-full max-w-3xl flex flex-col shadow-lg"
      >
        {/* Google Logo */}
        <div className="text-3xl text-white font-bold mb-8">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        <h1 className="text-4xl text-white font-semibold mb-6">
          Verify your additional email
        </h1>
        <p className="text-gray-400 mb-4">
          A verification code will be sent to the email you provide below.
        </p>

        <label className="mb-6">
          <p className="mb-1 text-[0.875rem] text-white">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("additionalEmail", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full rounded-md bg-[#2A2A2A] p-2 text-white"
          />
          <div className="text-sm text-red-400 mt-1">
            {errors.additionalEmail?.message}
          </div>
        </label>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#8AB4F8] text-black font-medium px-8 py-2 rounded-full hover:bg-[#669df6]"
          >
            Send OTP
          </button>
        </div>
      </form>

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

export default EmailVerification;
