import { useContext } from "react";
import { stateContext } from "./ContextProvider";

export const useStateContext = () => useContext(stateContext);
