import React from "react";

const CheckBox = ({ name, text, checked, onChange }) => {
  return (
    <div className="flex items-center w-[17rem] sm:w-[19rem] lg:w-[21rem] space-x-2 border dark:border-[#2e2e2e] rounded px-3 py-2 shadow  ">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        name={name}
        className=" accent-neutral-300 dark:accent-[#5e5e5e] h-4  "
      />
      <label htmlFor={name} className="text-sm text-gray-300">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
