import React from "react";

const AuthForm2Input = ({ label1, label2 }) => {
  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col ">
        <label className="text-gray-600 dark:text-gray-300">{label1}</label>
        <input
          placeholder="Hussen"
          className="bg-white shadow md:w-[8.5rem] w-[10rem] sm:w-[12rem] ml:w-[10rem] lg:w-[10.5rem] xl:w-[12rem] px-2 py-2 border-t-1 border-color rounded-sm my-1  dark:bg-[#1F2937] "
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-gray-600 dark:text-gray-300">{label2}</label>
        <input
          placeholder="Ali"
          className="bg-white shadow md:w-[8.5rem]  w-[10rem] sm:w-[12rem]  ml:w-[10rem] lg:w-[10.5rem] xl:w-[12rem] px-2 py-2 border-t-1 border-color rounded-sm my-1  dark:bg-[#1F2937] "
        />
      </div>
    </div>
  );
};

export default AuthForm2Input;
