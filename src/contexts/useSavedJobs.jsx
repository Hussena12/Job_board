import react, { useState, useEffect } from "react";
import { SavedJobsContext } from "./useSavedProvider";

export const SavedjobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const saved = localStorage.getItem("saved");

      if (!saved || saved === "undefined") return [];
      return JSON.parse(saved) || [];
    } catch (err) {
      console.log("Failed to parse saved jobs", err);
      return [];
    }
  });

  const handleSaveJob = (job) => {
    setSavedJobs((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      return current.some((j) => j.id === job.id)
        ? current.filter((j) => j.id !== job.id)
        : [...current, job];
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem("saved", JSON.stringify(savedJobs));
    } catch (err) {
      console.log("Failed to save Jobs", err);
    }
  }, [savedJobs]);

  console.log(savedJobs);

  return (
    <SavedJobsContext.Provider value={{ handleSaveJob, savedJobs }}>
      {children}
    </SavedJobsContext.Provider>
  );
};
