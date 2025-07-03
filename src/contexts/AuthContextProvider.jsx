import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const userAuth = () => {
  return useContext(AuthContext);
};
