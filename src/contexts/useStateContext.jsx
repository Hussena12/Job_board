import { useContext , createContext} from "react";
export const stateContext = createContext();


export const useStateContext = () => useContext(stateContext);
