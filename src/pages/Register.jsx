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
        <AuthFormInput label="Username or email" />
        <AuthFormInput label="Password" />
      </AuthLayout>
    </div>
  );
};

export default Register;
