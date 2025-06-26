import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <div className="flex justify-center mt-7 mb-2">
      <button className="bg-[#1F2937] dark:bg-[#33445c] text-gray-300 shadow w-80 px-2 py-3 border-t-1 border-color rounded-sm my-1 text-md">
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
