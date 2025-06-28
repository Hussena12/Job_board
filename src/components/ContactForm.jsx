import React from "react";

const ContactForm = ({ label, placeholder }) => {
  return (
    <div className="mt-4 flex justify-center">
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
          className="bg-white dark:bg-[#1F2937] dark:text-gray-100 shadow lg:w-[22rem]   xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 dark:border-[#b0b0b010] dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default ContactForm;
