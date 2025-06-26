import React from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  AuthForm2Input,
  SubmitButton,
} from "@/components/auth";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="hidden md:flex w-[60%]  m-4  ">
        <div className="relative">
          <img
            className="object-cover min-h-screen "
            src="/public/login2.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.2))]" />
          <div className="absolute top-6 right-6 text-white bg-[rgba(159,137,113,0.5)] py-1 px-2 rounded-2xl flex gap-2 items-center">
            <Link to="/">Back to Home</Link>
            <FaArrowRight size={12} />
          </div>
          <div className="absolute flex flex-col justify-center bottom-16 left-60 rounded-xl bg-[rgba(159,137,113,0.5)] px-4 py-6">
            <div className="flex gap-2 mb-2">
              <img
                className="w-7 h-7 rounded-full object-cover transform  "
                src="/public/test.jpg"
              />

              <p>Semir Hamid</p>
            </div>
            <p className="font-italiana leading-tight">
              "I found my first remote developer role through this platform!
              <br /> The listings are clear, up-to-date, and perfectly matched
              <br />
              to what I was looking for."
            </p>
          </div>
        </div>
      </div>
      <div className=" relative min-h-screen w-full md:w-[40%]">
        <div
          className="md:hidden absolute top-10 left-4 font-medium py-1 bg-light-gray px-2 rounded-2xl flex gap-2 items-center text-[#1F2937]    dark:bg-gray-700
dark:text-gray-300"
        >
          <FaArrowLeft size={12} />
          <Link to="/">Back </Link>
        </div>
        <AuthLayout>
          <AuthHeader text="Get Started" />
          <AuthForm2Input />
          <AuthFormInput placeholder="your.name@example.com" label="Email" />
          <AuthFormInput placeholder="Enter your password" label="Password" />
          <SubmitButton text="Create account" />

          <div className="flex flex-col">
            <div className="flex justify-center gap-4 items-center py-8 px-2 text-sm text-gray-600">
              <hr className="w-16" />
              <span className="text-xs dark:text-gray-300">
                Or register with
              </span>
              <hr className="w-16" />
            </div>
            <div className="flex gap-4 justify-center">
              <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
                <img
                  className="w-6 "
                  src="https://logo.clearbit.com/google.com"
                />{" "}
                <p className="dark:text-gray-300">Google</p>
              </button>
              <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
                <img
                  className="w-6"
                  src="https://logo.clearbit.com/apple.com"
                />{" "}
                <p className="dark:text-gray-300">Apple</p>
              </button>
            </div>
            <p className="flex justify-center gap-1 items-center m-4 text-sm ">
              <span className="text-gray-600 dark:text-gray-300">
                Already Have an Account?
              </span>
              <Link className="text-green-500 underline" to="/Login">
                Log in
              </Link>
            </p>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default Register;
