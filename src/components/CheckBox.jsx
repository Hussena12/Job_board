import React from "react";

const CheckBox = ({ id, text }) => {
  return (
    <div className="flex items-center w-[17rem] sm:w-[19rem] lg:w-[21rem] space-x-2 border border-gray-300 rounded px-3 py-2   ">
      <input type="checkbox" id={id} className="  form-checkbox h-4  " />
      <label htmlFor={id} className="text-sm text-gray-700">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
