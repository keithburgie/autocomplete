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
  setPrefetchedData, // pass this from Menu
  delay = 300,
}) =>
  debounce(async (query, page) => {
    try {
      const data = await action(query, page);
      setSearchResults(data.items);
      setTotalResults(data.total);

      // Pre-fetching for next page
      const nextPageData = await action(query, page + 1);
      setPrefetchedData((prevData) => ({
        ...prevData,
        [page + 1]: nextPageData.items,
      }));

      // Pre-fetching for previous page if not on the first page
      if (page > 1) {
        const prevPageData = await action(query, page - 1);
        setPrefetchedData((prevData) => ({
          ...prevData,
          [page - 1]: prevPageData.items,
        }));
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, delay);
