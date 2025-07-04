import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "@/supabaseClient";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  // Sign up

  const signUpNewUser = async (email, password) => {
    const { data, error } = supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("there was a problem signing up:", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  // sign in

  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.log("sign in error:", error);
        return { success: false, error: error.message };
      }
      console.log("sign in success:", data);
      return { success: true, data };
    } catch (error) {
      console.log("an error occured:", error);
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
      value={{ session, signUpNewUser, signOut, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
