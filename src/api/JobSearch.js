export const fetchJobSearch = async (
  query = "developer in Chicago",
  page = 1
) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    query
  )}&page=${page}&country=us`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  };

  try {
    const res = await fetch(url, options);

    // 2. Handle 403/429 errors explicitly
    if (res.status === 403) {
      throw new Error("Invalid API key (403 Forbidden)");
    }
    if (res.status === 429) {
      throw new Error("Too many requests (429) - try again later");
    }
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs (status: ${res.status})`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error; // Re-throw to let the caller handle it
  }
};
