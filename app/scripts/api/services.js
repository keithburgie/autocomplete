import { BASE_URL } from "./config";

export const searchItems = async (query, page = 1) => {
  const endpoint = `${BASE_URL}/search?query=${encodeURIComponent(
    query
  )}&page=${page}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Error fetching search results");
  }

  return await response.json();
};
