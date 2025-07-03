import { userAuth } from "@/contexts/AuthContextProvider";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { session } = userAuth();

  return <div>{session ? <>{children}</> : <Navigate to="/Register" />}</div>;
};

export default PrivateRoute;
