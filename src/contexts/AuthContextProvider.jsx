// import { AuthContext } from "./AuthContext";
import { useContext, createContext } from "react";

export const AuthContext = createContext();

export const userAuth = () => {
  return useContext(AuthContext);
};
