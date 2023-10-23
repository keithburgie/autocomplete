export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Debounced search function
 */
export const createDebouncedSearch = (
  searchFunction,
  setSearchResults,
  delay = 300
) =>
  debounce(async (query) => {
    try {
      const data = await searchFunction(query);
      setSearchResults(data.items);
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, delay);
