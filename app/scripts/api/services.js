import { BASE_URL } from "./config";

export const searchItems = async (query) => {
  const endpoint = `${BASE_URL}/search?query=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Error fetching search results");
  }

  return await response.json();
};
