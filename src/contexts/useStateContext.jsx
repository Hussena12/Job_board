import { useContext } from "react";
import { stateContext } from "./ContextProvider";

import { AuthContext } from "./AuthContext";

export const useStateContext = () => useContext(stateContext);
export const userAuth = () => useContext(AuthContext);
