import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center    min-h-screen">
      <div className=" w-full p-6 ">{children}</div>
    </div>
  );
};

export default AuthLayout;
