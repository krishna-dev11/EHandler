import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { sendOtp } from '../../../Services.jsx/Operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpData } from '../../../Slices/Auth';

const EmailVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpData } = useSelector((state) => state.auth);
  console.log(signUpData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const enteredEmail = data.additionalEmail;
    console.log(enteredEmail);

    if (!enteredEmail) {
      toast.error("Please enter an email address.");
      return;
    }

    const event = {
      ...signUpData,
      additionalEmail: enteredEmail,
    };

    dispatch(setSignUpData(event));

    // Send OTP to the entered email
    dispatch(sendOtp(enteredEmail, navigate));
    // toast.success(`OTP sent to ${enteredEmail}`);
    navigate("/EnterCode");
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black rounded-2xl p-8 w-full max-w-3xl shadow-lg flex justify-between items-start"
      >
        {/* Left Section */}
        <div className="w-1/2 pr-8">
          <div className="text-4xl font-bold mb-8">
            <span className="text-[#4285F4]">D</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
          <h1 className="text-4xl text-white font-medium mb-2">
            Verify your additional email
          </h1>
          <p className="text-white text-sm mb-8">
            A verification code will be sent to the email you provide below.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <div className="flex flex-col gap-6">
            <div className="relative">
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
                className={`w-full px-4 py-2 rounded-md bg-transparent border ${
                  errors.additionalEmail ? 'border-red-500' : 'border-gray-600'
                } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.additionalEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.additionalEmail.message}</p>
              )}
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6]"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="absolute bottom-4 w-full max-w-3xl flex justify-between text-sm text-gray-400">
        <div>English (United Kingdom)</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;