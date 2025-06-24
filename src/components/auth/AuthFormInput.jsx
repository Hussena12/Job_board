import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthFormInput = ({ label, placeholder }) => {
  const [showpassword, setShowpassword] = useState(false);

  const togglePassword = () => setShowpassword((prev) => !prev);
  return (
    <div className="  flex justify-center  py-2">
      <div className="flex flex-col relative ">
        <label htmlFor="input" className="text-gray-600">
          {label}
        </label>
        <input
          type={
            label.toLowerCase() === "password" && !showpassword
              ? "password"
              : "text"
          }
          placeholder={placeholder}
          className="bg-white shadow w-[20rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 "
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
