import React from "react";
import { userAuth } from "@/contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { session, signOut } = userAuth();
  const navigate = useNavigate();
  console.log(session);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-2 m-4">
      <span>
        <img src="/logout.svg" alt="user" className="w-8 h-8 rounded-full" />
      </span>
      <button
        onClick={handleSignOut}
        className="  rounded-2xl border  border-[#ff0000] py-1 px-2 text-black "
      >
        SignOut
      </button>
    </div>
  );
};

export default SignOut;
