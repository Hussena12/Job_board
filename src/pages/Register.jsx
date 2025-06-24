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
    <div className="min-h-screen">
      <AuthLayout>
        <AuthHeader />
        <AuthForm2Input />
        <AuthFormInput placeholder="Email" label="Username or email" />
        <AuthFormInput placeholder="Enter your password" label="Password" />
        <SubmitButton text="Create account" />

        <div className="flex flex-col">
          <div className="flex justify-center gap-4 items-center p-6 text-sm text-gray-600">
            <hr className="w-20" />
            <span>Or register with</span>
            <hr className="w-20" />
          </div>
          <div className="flex gap-4 justify-center">
            <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
              <img className="w-6" src="https://logo.clearbit.com/google.com" />{" "}
              <p>Google</p>
            </button>
            <button className="flex gap-2 border-1 border-color px-9 py-2 rounded-sm">
              <img className="w-6" src="https://logo.clearbit.com/apple.com" />{" "}
              <p>Apple</p>
            </button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Register;
