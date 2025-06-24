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
    <div className="min-h-screen">
      <AuthLayout>
        <AuthHeader />
        <AuthFormInput label="Username or email" />
        <AuthFormInput label="Password" />
        <div className=" flex mx-10 justify-end text-right">
          <Link className=" text-sm ">Forgot password?</Link>
        </div>
        <SubmitButton text="Log in" />
        <div className="flex flex-col">
          <p className="flex justify-center gap-4 items-center p-6 text-sm text-gray-600">
            <hr className="w-20" />
            <span>or</span>
            <hr className="w-20" />
          </p>

          <p className="flex  gap-3 items-center justify-center text-sm ">
            <img className="w-6" src="https://logo.clearbit.com/google.com" />

            <Link className="text-gray-600">Sign in with Google</Link>
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
  );
};

export default Login;
