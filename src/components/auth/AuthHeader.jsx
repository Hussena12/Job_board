import React from "react";

const AuthHeader = ({ text }) => {
  return (
    <div className="flex justify-center py-4">
      <p className="flex text-2xl font-semibold pb-4 items-center text-black">
        {text}
      </p>
    </div>
  );
};

export default AuthHeader;
