import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "@/supabaseClient";
import { AuthContext } from "./AuthContextProvider";

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  const [authError, setAuthError] = useState(null);

  // Sign up

  const signUpNewUser = async (email, password) => {
    try {
      const { data, error } = supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log(formatSignUpError(error));

        console.error("Supabase signup error:", {
          message: error.message,
          code: error.code,
          status: error.status,
          originalError: error,
        });
        throw error;
        // return { success: false, error };
      }

      return { success: true, data };
    } catch (error) {
      console.log(formatSignUpError(error));
      console.error("Full signup error:", error);
      throw error; // Re-throw for further handling
    }
  };

  const formatSignUpError = (error) => {
    if (!error.message) return "Signup failed. Please try again.";

    if (error.message.includes("Password should be at least 6 characters")) {
      return "Password must be at least 6 characters long.";
    }

    if (error.message.includes("Invalid email address")) {
      return "Please enter a valid email address.";
    }

    if (error.message.includes("already registered")) {
      return "This email is already registered. Try signing in instead.";
    }

    return "Signing failed:" + error.message;
  };
  // sign in

  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setAuthError(formatSignInError(error.message));
        console.log(formatSignInError(error.message));
        return { success: false, error: error.message };
      }
      console.log("sign in success:", data);
      return { success: true, data };
    } catch (err) {
      console.log(err.message);
    }
  };

  const formatSignInError = (message) => {
    switch (message) {
      case "Invalid login credentials":
        return "Incorrect email or password. Please try again.";
      case "Email not confirmed":
        return "Please verify your email first";
      default:
        return "Login failed. Please try again later.";
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // sign out

  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.error("there was an error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signOut, signInUser, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
