import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center mx-12   min-h-screen pt-20">
      <div className=" w-full p-6 ">{children}</div>
    </div>
  );
};

export default AuthLayout;
