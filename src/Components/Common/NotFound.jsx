import React from "react";
import { FaArrowAltCircleLeft, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex w-full h-screen  bg-richblack-900 justify-center items-center  font-semibold font-inter  text-richblack-5  flex-col gap-y-2">
      <div className="justify-center items-center flex text-2xl font-semibold font-inter  text-richblack-5  flex-col gap-y-2 ">
        <p>404</p>
        <p>Not-Found</p>
      </div>
      <button className=" px-3 py-2 bg-yellow-50 rounded-md text-richblack-900 flex gap-x-1 justify-center items-center" 
      onClick={()=>navigate(-1)}>
        <FaArrowLeft fill="#000814"/>
        <p>Back</p>
      </button>
    </div>
  );
};

export default NotFound;
