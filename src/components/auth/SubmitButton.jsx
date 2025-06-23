import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <div className="flex justify-center mt-5 mb-2">
      <button className="bg-black text-gray-300 shadow w-[22rem] px-2 py-3 border-t-1 border-color rounded-sm my-1">
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
