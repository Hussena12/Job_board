import React from "react";

const PostInput = ({ label, placeholder, className = "" }) => {
  return (
    <div className="pb-4">
      <div className="flex flex-col relative  ">
        <label
          htmlFor="input"
          className="text-gray-600 dark:text-gray-300 text-sm"
        >
          {label}
        </label>
        <input
          placeholder={placeholder}
          className={`bg-white dark:bg-[#1F2937] dark:text-gray-100 shadow lg:w-[22rem]   xl:w-[25rem] w-[16rem] sm:w-[25rem] px-2 py-2 border-t-1 border-color rounded-sm my-1 dark:border-[#b0b0b010] dark:placeholder-gray-400 text-xs ${className}`}
        />
      </div>
    </div>
  );
};

export default PostInput;
