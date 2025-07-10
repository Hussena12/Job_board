import React from "react";

const Contact2Form = ({ label1, label2 }) => {
  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col ">
        <label className="text-gray-600 dark:text-gray-300 ">{label1}</label>
        <input
          type="text"
          name="name"
          placeholder="Hussen"
          className="bg-white shadow focus:outline-none focus:dark:border-[#2e2e2e]  w-[10.5rem] sm:w-[12rem]  lg:w-[10.5rem] xl:w-[12rem] px-2 py-3 border-t-1 border-color rounded-sm my-1  dark:bg-[#171717] dark:border-[#b0b0b010] dark:placeholder-gray-400"
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-gray-600 dark:text-gray-300 ">{label2}</label>
        <input
          type="text"
          name="name"
          placeholder="Ali"
          className="bg-white shadow focus:outline-none focus:dark:border-[#2e2e2e]   w-[10.5rem] sm:w-[12rem]   lg:w-[10.5rem] xl:w-[12rem] px-2 py-3 border-t-1 border-color rounded-sm my-1  dark:bg-[#171717] dark:border-[#b0b0b010] dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default Contact2Form;
