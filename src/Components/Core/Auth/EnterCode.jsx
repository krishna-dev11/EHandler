import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../../../Services.jsx/Operations/authAPI';
import { setSignUpData } from '../../../Slices/Auth';

const EnterCode = () => {
  const [timer, setTimer] = useState(30);
  const [codeSent, setCodeSent] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpData } = useSelector((state) => state.auth);
  console.log(signUpData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Uncomment this useEffect if you want the timer functionality
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const onSubmit = (event) => {
    console.log('Code entered:', event.code);

    const data = {
      ...signUpData,
      otp: event.code,
    };

    dispatch(setSignUpData(data));

    console.log(data);
    console.log(signUpData);

    dispatch(signUp(data, navigate));
  };

  const handleResendCode = () => {
    if (timer === 0) {
      setTimer(30);
      reset({ code: '' });
      setCodeSent(false);
      dispatch(sendOtp(signUpData.additionalEmail))
      console.log('New code sent');
    }
  };


  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-8 w-full max-w-3xl shadow-lg flex justify-between items-start">
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
            Enter the code
          </h1>
          <p className="text-white text-sm mb-8">
            Enter the 6-digit verification code to confirm that you received the text message
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="G-XXXXXX"
                className={`w-full px-4 py-2 rounded-md bg-transparent border ${
                  errors.code ? 'border-red-500' : 'border-gray-600'
                } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...register('code', {
                  required: 'Code is required',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: 'Must be 6 digits',
                  },
                })}
                disabled={codeSent}
              />
              {errors.code && (
                <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
              )}
            </div>

            <p
              className={`text-sm mb-6 ${
                timer > 0 ? 'text-white cursor-not-allowed' : 'text-[#8AB4F8] hover:underline cursor-pointer'
              }`}
              onClick={handleResendCode}
            >
              {timer > 0 ? `Get new code (${timer}s)` : 'Get new code'}
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6] disabled:opacity-60"
                disabled={codeSent}
              >
                {codeSent ? 'Submitted' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>

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

export default EnterCode;