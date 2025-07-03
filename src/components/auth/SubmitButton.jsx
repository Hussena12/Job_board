import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <div className="flex justify-center mt-4 mb-2">
      <button
        type="submit"
        className="bg-[#1F2937] dark:bg-[#181818] text-gray-300 shadow w-80 px-2 py-2 border-t-1 border-color rounded-sm my-1 text-md"
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
