import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setSignUpData } from "../../../Slices/Auth";

const ChooseGmailAddress = () => {
  const { signUpData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const [suggestions, setSuggestions] = useState([]);
  const selected = watch("gmailChoice", "");

  // Generate 2 Gmail suggestions using signUpData
  useEffect(() => {
    if (signUpData?.firstName && signUpData?.lastName) {
      const { firstName, lastName, day, month, year } = signUpData;

      const base1 = `${firstName}${lastName}${day}${month}${year}`.toLowerCase();
      const base2 = `${lastName}${firstName}${year}${month}`.toLowerCase();

      setSuggestions([`${base1}@gmail.com`, `${base2}@gmail.com`]);
    }
  }, [signUpData]);

  const onSubmit = (event) => {
    const selectedEmail =
      event.gmailChoice === "create" ? event.customEmail : event.gmailChoice;

    console.log("Selected Gmail:", selectedEmail);

    const data = {
      ...signUpData,
      email: selectedEmail,
    };

    dispatch(setSignUpData(data));

    console.log(signUpData);

    navigate("/CreatePassword");
  };

  return (
    <div className="min-h-screen bg-[#202124] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black p-8 rounded-2xl w-full max-w-3xl shadow-lg flex justify-between items-start"
      >
        {/* Left Section: Logo, Heading, and Description */}
        <div className="w-1/2 pr-8">
          {/* Google Logo */}
          <div className="flex items-center mb-8">
            <div className="text-4xl font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl text-white font-medium mb-2">
            Choose your Gmail address
          </h1>
          <p className="text-richblack-5 text-lg mb-8">
            Pick a Gmail address or create your own
          </p>
        </div>

        {/* Right Section: Radio Options */}
        <div className="w-1/2">
          <div className="space-y-6 mb-8">
            {suggestions.map((email, index) => (
              <label
                key={index}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <input
                  type="radio"
                  value={email}
                  {...register("gmailChoice", { required: true })}
                  className="w-5 h-5 border-2 border-richblack-5 rounded-full checked:bg-[#8AB4F8] checked:border-[#8AB4F8] focus:ring-0 focus:ring-offset-0 appearance-none checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:relative checked:after:left-1 checked:after:top-1"
                />
                <span className="text-white text-lg">{email}</span>
              </label>
            ))}

            <label className="flex items-center space-x-4 cursor-pointer">
              <input
                type="radio"
                value="create"
                {...register("gmailChoice", { required: true })}
                className="w-5 h-5 border-2 border-richblack-5 rounded-full checked:bg-[#8AB4F8] checked:border-[#8AB4F8] focus:ring-0 focus:ring-offset-0 appearance-none checked:after:content-[''] checked:after:block checked:after:w-3 checked:after:h-3 checked:after:bg-white checked:after:rounded-full checked:after:relative checked:after:left-1 checked:after:top-1"
              />
              <span className="text-white text-lg">
                Create your own Gmail address
              </span>
            </label>

            {selected === "create" && (
              <input
                type="text"
                placeholder="Enter your Gmail address"
                {...register("customEmail")}
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                required
              />
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center">
            <a href="#" className="text-[#8AB4F8] hover:underline text-sm">
              Use your existing email
            </a>
            <button
              type="submit"
              className="bg-[#8AB4F8] text-black font-medium px-6 py-2 rounded-full hover:bg-[#669df6]"
            >
              Next
            </button>
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

export default ChooseGmailAddress;