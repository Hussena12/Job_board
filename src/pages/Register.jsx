import React, { useState } from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  AuthForm2Input,
  SubmitButton,
} from "@/components/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SignAddition, SignImage } from "@/components";
import { userAuth } from "@/contexts/AuthContextProvider";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);

  const { session, signUpNewUser } = userAuth();
  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        await new Promise((resolve) => {
          setTimeout(resolve, 600);
          setMessage(true);
          e.target.reset();
        });
        navigate("/Dashboard");
      }
    } catch (err) {
      setError("an error occurred");
    } finally {
      setLoading(false);
      setMessage(false);
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <SignImage />
      <form
        onSubmit={handleSignUp}
        className=" relative min-h-screen w-full md:w-[40%]"
      >
        <div className="md:hidden absolute top-10 left-4 font-medium py-1 bg-light-gray px-2 rounded-2xl flex gap-2 items-center text-[#1F2937] dark:bg-gray-700 dark:text-gray-300">
          <FaArrowLeft size={12} />
          <Link to="/">Back </Link>
        </div>

        <AuthLayout>
          {message && (
            <div className="success-message flex gap-2">
              <span className="success-check w-6 h-6 rounded-full bg-[#4caf50] text-white ">
                ✓
              </span>

              <p> You have successfully Signed up.</p>
            </div>
          )}
          <AuthHeader text="Get Started" />
          {/* <AuthForm2Input label1="First name" label2="Last name" /> */}
          <AuthFormInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.name@example.com"
            label="Email"
          />
          <AuthFormInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            label="Password"
          />
          <SubmitButton text="Create account" />
          {error && <p className="text-red-600 py-4 text-center">{error}</p>}

          <SignAddition />
        </AuthLayout>
      </form>
    </div>
  );
};

export default Register;
