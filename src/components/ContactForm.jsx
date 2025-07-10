import React from "react";

const ContactForm = ({ label, placeholder, name, type }) => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex flex-col relative  ">
        <label htmlFor="input" className="text-gray-600 dark:text-gray-300">
          {label}
        </label>
        <input
          name={name}
          type={`(label.toLowerCase() === "password" && !showpassword)
              && "password"
              : ${type}`}
          placeholder={placeholder}
          className="bg-white focus:outline-none focus:dark:border-[#2e2e2e] dark:bg-[#171717] dark:text-gray-100 shadow lg:w-[22rem]   xl:w-[25rem] w-[22rem] sm:w-[25rem] px-2 py-3 border-t-1 border-color rounded-sm my-1 dark:border-[#b0b0b010] dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default ContactForm;
