// src/hooks/useJobDetails.js

import { useState, useEffect } from "react";
import { fetchJobDetails } from "../api/jobDetails";

export const useJobDetails = (jobId) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) return;

    setLoading(true);
    fetchJobDetails(jobId)
      .then((res) => {
        setDetails(res.data[0]); // take the first (and only) job
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [jobId]);

  return { details, loading, error };
};

export function useLocalStorage(initial, key) {}
