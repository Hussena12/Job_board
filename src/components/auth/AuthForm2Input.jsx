import React from "react";

const AuthForm2Input = () => {
  return (
    <div className="flex gap-4 justify-center">
      <input
        placeholder="First name"
        className="bg-white shadow w-[9.5rem] px-2 py-3 border-t-1 border-color rounded-sm my-1  dark:bg-[#1F2937] "
      />
      <input
        placeholder="Last name"
        className="bg-white shadow  w-[9.5rem] px-2 py-3 border-t-1 border-color rounded-sm my-1  dark:bg-[#1F2937] "
      />
    </div>
  );
};

export default AuthForm2Input;
