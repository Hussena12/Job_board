import React from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  SubmitButton,
} from "@/components/auth";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SignImage } from "@/components";

const Login = () => {
  return (
    <div className="min-h-screen md:flex">
      <SignImage />
      <div className="  relative min-h-screen w-full md:w-[40%]  ">
        <div className="md:hidden absolute top-10 left-4 font-medium py-1 bg-light-gray dark:bg-gray-700 px-2 rounded-2xl flex gap-2 items-center  text-[#1F2937] dark:text-gray-300">
          <FaArrowLeft size={12} />
          <Link to="/">Back </Link>
        </div>
        <AuthLayout>
          <AuthHeader text="Welcome back" />
          <AuthFormInput
            placeholder="your.name@example.com "
            label="Email or Username "
          />
          <AuthFormInput placeholder="Enter your password" label="Password" />
          {/* <div className=" flex mx-10 justify-end text-right">
          <Link className=" text-sm ">Forgot password?</Link>
        </div> */}
          <SubmitButton text="Log in" />
          <div className="flex flex-col">
            <p className="flex justify-center gap-4 items-center p-6 text-sm text-gray-600">
              <hr className="w-20" />
              <span className="dark:text-gray-300">or</span>
              <hr className="w-20" />
            </p>

            <p className="flex  gap-3 items-center justify-center text-sm  ">
              <img
                className=" md:w-5 ml:w-6 w-6"
                src="https://logo.clearbit.com/google.com"
              />

              <Link className="text-gray-600 dark:text-gray-400 md:text-xs ml:text-sm ">
                Sign in with Google
              </Link>
            </p>

            <p className="flex justify-center gap-1 items-center m-6 text-sm ">
              <span className="text-gray-600 dark:text-gray-300 md:text-xs ml:text-sm">
                Don't Have an Account?
              </span>
              <Link
                className="text-green-500 underline md:text-xs ml:text-sm"
                to="/Register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default Login;
