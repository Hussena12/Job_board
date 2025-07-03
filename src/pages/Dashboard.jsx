import React from "react";
import { userAuth } from "@/contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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

  console.log(session);
  return (
    <div>
      <h1>Welcome </h1>

      <p>hasdhjfdsgyasvfjhsvadhjfvjhdsavyufguyefvjhavs</p>
      <button onClick={handleSignOut} className="p-2 border ">
        SignOut
      </button>
    </div>
  );
};

export default Dashboard;
