import { useContext, createContext } from "react";
export const SavedJobsContext = createContext();

export const useSavedJobs = () => useContext(SavedJobsContext);
