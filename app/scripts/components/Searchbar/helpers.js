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
export const createDebouncedSearch = ({
  action,
  setSearchResults,
  setTotalResults,
  delay = 300,
}) =>
  debounce(async (query, page) => {
    try {
      const data = await action(query, page);
      setSearchResults(data.items);
      setTotalResults(data.total);
      // console.log({ data });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, delay);
