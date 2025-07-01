import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthFormInput = ({ label, placeholder }) => {
  const [showpassword, setShowpassword] = useState(false);

  const togglePassword = () => setShowpassword((prev) => !prev);

  return (
    <div className="  flex justify-center  py-2">
      <div className="flex flex-col relative  ">
        <label htmlFor="input" className="text-gray-600 dark:text-gray-300">
          {label}
        </label>
        <input
          type={
            label.toLowerCase() === "password" && !showpassword
              ? "password"
              : "text"
          }
          placeholder={placeholder}
          className="bg-white dark:bg-[#1F2937] dark:text-gray-100 shadow lg:w-[22rem] md:w-[17rem] ml:w-[20rem] xl:w-[24rem] w-[21rem] sm:w-[23rem] px-2 py-2 border-t-1 border-color rounded-sm my-1 "
        />

        {label.toLowerCase() === "password" && (
          <span
            onClick={togglePassword}
            className="absolute right-3 top-11 text-gray-500 cursor-pointer "
          >
            {showpassword ? <FiEye /> : <FiEyeOff />}
          </span>
        )}
      </div>
    </div>
  );
};

export default AuthFormInput;
