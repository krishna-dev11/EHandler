import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpData } from "../../../Slices/Auth";

const CreatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpData } = useSelector((state) => state.auth);
  console.log(signUpData);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (event) => {
    if (event.password !== event.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      ...signUpData,
      password: event.password,
      confirmPassword: event.confirmPassword,
    };

    dispatch(setSignUpData(data));

    toast.success("Password set successfully!");
    navigate("/PhoneVerification");
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-8 w-full max-w-3xl shadow-lg flex justify-between items-start">
        {/* Left Side - Text */}
        <div className="w-1/2 pr-8">
          {/* Google Logo */}
          <div className="text-4xl font-bold mb-8">
            <span className="text-[#4285F4]">G</span>
            <span className= "text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          <h1 className="text-4xl text-white font-medium mb-2">
            Create a strong password
          </h1>
          <p className="text-white text-sm mb-8">
            Create a strong password with a mixture of letters, numbers and symbols
          </p>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col gap-6">
          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-white"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6]"
            >
              Next
            </button>
          </div>
        </form>
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

export default CreatePassword;