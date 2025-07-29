import { createContext, useContext, useEffect, useState } from "react";
const jobContext = createContext();

export const JobProvider = ({ children }) => {
  // local storage to persost  jobs

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(firstName, lastName);

  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("postedJobs");

    try {
      return storedJobs ? JSON.parse(storedJobs) : [];
    } catch (err) {
      console.error("Failed to parse stored jobs from localStorage", err);
      return [];
    }
  });

  // save jobs to localstorage whenever 'jobs' state changes
  useEffect(() => {
    try {
      localStorage.setItem("postedJobs", JSON.stringify(jobs));
    } catch (err) {
      console.log("Failed to save jobs to localStorage: ", err);
    }
  }, [jobs]);

  //function to add new job
  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, { ...newJob }]);
  };

  // value provided to consume
  const contextValue = {
    jobs,
    addJob,
  };

  return (
    <jobContext.Provider
      value={{
        ...contextValue,
        setFirstName,
        setLastName,
        firstName,
        lastName,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(jobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a jobProvider");
  }
  return context;
};
