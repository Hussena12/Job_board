import React from "react";
import { Link } from "react-router-dom";

const SignAddition = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-4 items-center py-4 px-2 text-sm text-gray-600">
        <hr className="w-16" />
        <span className="text-xs dark:text-gray-300">Or</span>
        <hr className="w-16" />
      </div>
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 border-1 border-color px-6 py-1 rounded-sm">
          <img
            className="w-5 h-5 "
            src="https://logo.clearbit.com/google.com"
          />{" "}
          <p className="dark:text-gray-300">Google</p>
        </button>
        <button className="flex items-center gap-2 border-1 border-color px-6 py-1 rounded-sm">
          <img className="w-5 h-5 " src="https://logo.clearbit.com/apple.com" />{" "}
          <p className="dark:text-gray-300">Apple</p>
        </button>
      </div>
      <p className="flex justify-center gap-1 items-center m-4 text-sm ">
        <span className="text-gray-600 dark:text-gray-300 md:text-xs ml:text-sm">
          Already Have an Account?
        </span>
        <Link
          className="text-green-500 underline md:text-xs ml:text-sm"
          to="/Login"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignAddition;
