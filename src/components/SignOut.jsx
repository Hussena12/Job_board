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
    <button
      onClick={handleSignOut}
      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
        Sign Out
      </span>
    </button>
  );
};

export default SignOut;
