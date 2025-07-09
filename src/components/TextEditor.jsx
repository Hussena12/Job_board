import React from "react";

const TextEditor = ({ placeholder, value, onChange, name }) => {
  return (
    <div>
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        id="description"
        className="h-36 w-[21rem] sm:w-[25rem] lg:w-[28rem]  text-sm shadow border-t-1 border-color focus:border-[#2e2e2e] rounded-lg dark:bg-[#181818] dark:text-gray-100text-black p-2 focus:outline-none"
      ></textarea>
    </div>
  );
};

export default TextEditor;
