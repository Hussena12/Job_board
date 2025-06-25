// src/api/jobSearch.js

export const fetchJobSearch = async (
  query = "developer in Chicago",
  page = 1
) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    query
  )}&page=${page}&num_pages=1&country=us`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json(); // returns full JSON (status, request_id, data[])
};
