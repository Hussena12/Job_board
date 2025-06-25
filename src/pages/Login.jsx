import React from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  SubmitButton,
} from "@/components/auth";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="hidden md:flex w-[60%]    ">
        <div className="relative">
          <img className="object-cover min-h-screen" src="/public/login2.jpg" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.2))]" />
          <div className="absolute flex flex-col justify-center bottom-24 left-60 rounded-xl bg-[rgba(159,137,113,0.5)] px-4 py-6">
            <div className="flex gap-2 mb-2">
              <img
                className="w-7 h-7 rounded-full object-cover transform "
                src="/public/test.jpg"
              />
              <p>John Muir</p>
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
      <div className="min-h-screen w-full md:w-[40%]  ">
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
              <span>or</span>
              <hr className="w-20" />
            </p>

            <p className="flex  gap-3 items-center justify-center text-sm  ">
              <img className="w-6" src="https://logo.clearbit.com/google.com" />

              <Link className="text-gray-600 ">Sign in with Google</Link>
            </p>

            <p className="flex justify-center gap-1 items-center m-6 text-sm ">
              <span className="text-gray-600">Are you new?</span>
              <Link className="text-green-500 underline" to="/Register">
                Create an Account
              </Link>
            </p>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default Login;
