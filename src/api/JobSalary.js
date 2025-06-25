// src/api/jobSalary.js

export const fetchJobSalary = async (jobTitle, location) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${encodeURIComponent(
    jobTitle
  )}&location=${encodeURIComponent(location)}&location_type=ANY`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch salary");
  return res.json();
};
