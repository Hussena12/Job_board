import React from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  AuthForm2Input,
  SubmitButton,
} from "@/components/auth";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen md:flex">
      <div className="hidden md:flex w-[60%]    ">
        <div className="relative">
          <img
            className="object-cover min-h-screen "
            src="/public/login2.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.2))]" />
          <div className="absolute flex flex-col justify-center bottom-24 left-60 rounded-xl bg-[rgba(159,137,113,0.5)] px-4 py-6">
            <div className="flex gap-2 mb-2">
              <img
                className="w-7 h-7 rounded-full object-cover transform  "
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
      <div className="min-h-screen w-full md:w-[40%]">
        <AuthLayout>
          <AuthHeader text="Get Started" />
          <AuthForm2Input />
          <AuthFormInput placeholder="your.name@example.com" label="Email" />
          <AuthFormInput placeholder="Enter your password" label="Password" />
          <SubmitButton text="Create account" />

          <div className="flex flex-col">
            <div className="flex justify-center gap-4 items-center py-8 px-2 text-sm text-gray-600">
              <hr className="w-16" />
              <span className="text-xs">Or register with</span>
              <hr className="w-16" />
            </div>
            <div className="flex gap-4 justify-center">
              <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
                <img
                  className="w-6"
                  src="https://logo.clearbit.com/google.com"
                />{" "}
                <p>Google</p>
              </button>
              <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
                <img
                  className="w-6"
                  src="https://logo.clearbit.com/apple.com"
                />{" "}
                <p>Apple</p>
              </button>
            </div>
          </div>
        </AuthLayout>
      </div>
    </div>
  );
};

export default Register;
