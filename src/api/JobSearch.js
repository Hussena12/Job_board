// src/api/jobSearch.js

export const fetchJobSearch = async (
  query = "developer in Chicago",
  page = 1
) => {
  const apiKey = "90d89242f9msh87a50d7567b6402p14f2d1jsneaaf068d7a11";

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
