// src/hooks/useJobs.js

import { useState, useEffect } from "react";
import { fetchJobSearch } from "../api/JobSearch";

export const useJobs = (query, page = 1) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchJobSearch(query, page)
      .then((res) => {
        setJobs(res.data); // API gives jobs in `data` array
        setError(null);

      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  return { jobs, loading, error };
};
