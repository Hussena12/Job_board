import React from "react";

const AuthFormInput = ({ label }) => {
  return (
    <div className="flex justify-center  py-2">
      <div className="flex flex-col  ">
        <label htmlFor="input" className="text-gray-600">
          {label}
        </label>
        <input className="bg-white shadow w-[22rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 " />
      </div>
    </div>
  );
};

export default AuthFormInput;
