// src/hooks/useCompanySalary.js

import { useState, useEffect } from "react";
import { fetchCompanySalary } from "@/api/CompanyJobSalary";

export const useCompanySalary = (companyName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!companyName) return;

    setLoading(true);
    fetchCompanySalary(companyName)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [companyName]);

  return { data, loading, error };
};
