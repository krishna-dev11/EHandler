import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../../../Services.jsx/Operations/authAPI";
import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
  const [showpassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        EmailAddress: "",
        Password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const LoginSubmitHandler = (event) => {
    try {
      dispatch(setLogin(event.EmailAddress, event.Password, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen  bg-richblack-900 flex justify-center items-center">
      <div className=" w-[400px] bg-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-[rgba(255,255,255,0.18)]  rounded-lg  p-6 flex flex-col gap-4">
        <h2 className="text-center text-2xl font-semibold italic text-richblack-5">
          Login
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(LoginSubmitHandler)}
        >
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1">Email address</p>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("EmailAddress", { required: true })}
            />
          </label>

          <label className="w-full flex flex-col relative">
            <p className="text-sm text-richblack-5 mb-1">Password</p>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("Password", { required: true })}
            />
            <span
              onClick={() => setShowPassword(!showpassword)}
              className="absolute top-9 right-4 cursor-pointer"
            >
              {showpassword ? (
                <FaEyeSlash fill="gray" />
              ) : (
                <FaEye fill="gray" />
              )}
            </span>
            <Link
              to={"/forgotPassword"}
              className=" text-blue-200 text-sm  self-end"
            >
              <span>Forgot Password</span>
            </Link>
          </label>

          <p className="text-xs text-richblack-5 text-center">
            By signing up you accept our{" "}
            <a href="#" className=" text-pink-200">
              Terms Of Use
            </a>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            LOGIN
          </button>
        </form>

        <div className="flex items-center gap-2 text-richblack-5">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 border bg-richblack-5 border-gray-300 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
          <FcGoogle className="text-xl" /> Signup using Google
        </button>

        <p
          className="text-center text-sm text-gray-600 text-richblack-5 "
          onClick={() => navigate("/SignUP_FName_LName")}
        >
          Don't have an account?{" "}
          <a href="#" className=" text-pink-200">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
