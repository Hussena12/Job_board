import React, { useState } from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  AuthForm2Input,
  SubmitButton,
} from "@/components/auth";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SignAddition, SignImage } from "@/components";
import { userAuth } from "@/contexts/AuthContext";

const Register = () => {
  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { session } = userAuth();
  console.log(session);

  return (
    <div className="min-h-screen md:flex">
      <SignImage />
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
          <AuthForm2Input label1="First name" label2="Last name" />
          <AuthFormInput placeholder="your.name@example.com" label="Email" />
          <AuthFormInput placeholder="Enter your password" label="Password" />
          <SubmitButton text="Create account" />

          <SignAddition />
        </AuthLayout>
      </div>
    </div>
  );
};

export default Register;
