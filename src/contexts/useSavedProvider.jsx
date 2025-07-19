import { useContext } from "react";
import { SavedJobsContext } from "./useSavedJobs";

export const useSavedJobs = () => useContext(SavedJobsContext);
