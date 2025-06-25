// src/hooks/useJobSalary.js

import { useState, useEffect } from "react";
import { fetchJobSalary } from "../api/jobSalary";

export const useJobSalary = (jobTitle, location) => {
  const [salary, setSalary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobTitle || !location) return;

    setLoading(true);
    fetchJobSalary(jobTitle, location)
      .then((res) => {
        setSalary(res.data[0]);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [jobTitle, location]);

  return { salary, loading, error };
};
