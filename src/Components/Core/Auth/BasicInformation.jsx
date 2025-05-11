import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignUpData } from "../../../Slices/Auth";

export default function BasicInformation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signUpData } = useSelector((state) => state.auth);
  console.log(signUpData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    const data = {
      ...signUpData,
      day: event.day,
      month: event.month,
      year: event.year,
      gender: event.gender,
    };

    dispatch(setSignUpData(data));
    navigate("/ChooseGmailAddress");
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const years = Array.from({ length: 2025 - 1900 + 1 }, (_, i) => 1900 + i);

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center px-4">
      <div className="bg-black rounded-2xl p-8 w-full max-w-3xl shadow-md flex flex-col md:flex-row md:justify-between gap-8">

        {/* Left Section */}
        <div className="flex flex-col space-y-4 max-w-md">
        <div className="text-3xl font-bold mb-5">
          <span className="text-[#4285F4]">D</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
          <h2 className="text-2xl text-white font-semibold">Basic Information</h2>
          <p className="text-richblack-300">Enter your birthday and gender</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full md:max-w-md">

          {/* Date of Birth */}
          <div className="flex gap-2">
<input
  type="number"
  placeholder="Day"
  {...register("day", {
    required: true,
    min: 1,
    max: 31,
    validate: (value) => value >= 1 && value <= 31
  })}
  className="w-1/3 px-4 py-2 rounded-md bg-richblack-700 text-white border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

            <select
              {...register("month", { required: true })}
              className="w-1/3 px-4 py-2 rounded-md bg-richblack-700 text-white border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
            <select
              {...register("year", { required: true })}
              className="w-1/3 px-4 py-2 rounded-md bg-richblack-700 text-white border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <select
            {...register("gender", { required: true })}
            className="w-full px-4 py-2 rounded-md bg-richblack-700 text-white border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Info Link */}
          <a href="#" className="text-sm text-blue-400 hover:underline">
            Why we ask for birthday and gender
          </a>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 flex flex-col items-center text-richblack-300 text-xs gap-1">
        <div>English (United Kingdom)</div>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:underline">Help</span>
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Terms</span>
        </div>
      </div>
    </div>
  );
}
