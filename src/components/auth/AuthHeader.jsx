import React from "react";

const AuthHeader = ({ text }) => {
  return (
    <div className="flex p  justify-center">
      <p className="flex text-2xl font-semibold pb-4 items-center dark:text-gray-200 ">
        {text}
      </p>
    </div>
  );
};

export default AuthHeader;
