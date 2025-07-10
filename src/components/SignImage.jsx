import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignImage = () => {
  return (
    <div className="hidden md:flex w-[60%]  m-4  ">
      <div className="relative">
        <img className="object-cover min-h-screen " src="/login2.jpg" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.2))]" />
        <div className="absolute top-6 right-6 text-white bg-[rgba(159,137,113,0.5)] py-1 px-2 rounded-2xl flex gap-2 items-center">
          <Link to="/">Back to Home</Link>
          <FaArrowRight size={12} />
        </div>
        <div className=" absolute flex flex-col justify-center bottom-16 left-30 rounded-xl bg-[rgba(159,137,113,0.5)] px-4 py-6 mx-4 lg:mx-10 xl:mx-18">
          <div className="flex gap-2 mb-2">
            <img
              className="w-7 h-7 rounded-full object-cover transform "
              src="/test.jpg"
            />
            <p>Semir Hamid</p>
          </div>
          <p className="font-italiana leading-tight">
            "I found my first remote developer role through this platform! The
            listings are clear, up-to-date, and perfectly matched to what I was
            looking for."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignImage;
