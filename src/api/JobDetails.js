// src/api/jobDetails.js

export const fetchJobDetails = async (jobId) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch job details");
  return res.json();
};
