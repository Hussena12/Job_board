// src/api/companyJobSalary.js

export const fetchCompanySalary = async (companyName) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const url = `https://jsearch.p.rapidapi.com/company-salary?company_name=${encodeURIComponent(
    companyName
  )}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch company salary");
  return res.json();
};
