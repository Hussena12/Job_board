import React, { lazy, Suspense, useReducer } from "react";
import {
  AuthFormInput,
  AuthHeader,
  AuthLayout,
  AuthForm2Input,
  SubmitButton,
} from "@/components/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { SignAddition, Spinner } from "@/components";
import { userAuth } from "@/contexts/AuthContextProvider";

export const SignImage = lazy(() => import("@/components/SignImage"));

const initialState = {
  email: "",
  fullName: "",
  password: "",
  loading: false,
  error: "",
  message: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, message: true };
    case "ERROR":
      return { ...state, error: action.error };
    case "FINALLY":
      return { ...state, loading: false, message: false };
    case "EMAIL":
      return { ...state, email: action.email };
    case "FULLNAME":
      return { ...state, fullName: action.fullName };
    case "PASSWORD":
      return { ...state, password: action.password };
    default:
      throw new Error("problem in dispatch");
  }
};

const Register = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, fullName, message, error, password } = state;
  console.log(email, fullName, message, error, password);

  const { session, signUpNewUser, createUserProfile } = userAuth();
  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch({ type: "START" });
    try {
      //  sign up user
      const { data, error } = await signUpNewUser(email, password);

      if (data) {
        await new Promise((resolve) => {
          setTimeout(resolve, 600);
          dispatch({ type: "SUCCESS" });

          e.target.reset();
        });
        if (error) throw new Error("Signup failed");

        // create profile in supabase
        const { user } = data;
        await createUserProfile(user.id, fullName, email);

        // redirect to dashboard
        navigate("/Dashboard");
        console.log(data.user.id);
      }
    } catch (err) {
      dispatch({ type: "ERROR", error: err.message });
    } finally {
      dispatch({ type: "FINALLY" });

      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen md:flex">
      <Suspense fallback={<Spinner />}>
        <SignImage />
      </Suspense>{" "}
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

          <AuthFormInput
            onChange={(e) =>
              dispatch({ type: "FULLNAME", fullName: e.target.value })
            }
            placeholder="Hussein Ali"
            label="Full name"
          />
          <AuthFormInput
            onChange={(e) => dispatch({ type: "EMAIL", email: e.target.value })}
            placeholder="your.name@example.com"
            label="Email"
          />
          <AuthFormInput
            onChange={(e) =>
              dispatch({ type: "PASSWORD", password: e.target.value })
            }
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
