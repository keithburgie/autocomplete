function debounce(func, wait) {
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
 * Todo: clean up and/or move this. It's made to be used like:
 * 
 * const debouncedSearchRef = useRef(
    debouncedProductSearch({
      action: searchItems,
      setSearchResults,
      setTotalResults,
      setPrefetchedData,
      page: currentResultsPage,
    })
  );

  And that's a very specfic use case. It's not a generic debouncer.
 */
const debouncedProductSearch = ({
  action,
  setSearchResults,
  setTotalResults,
  setPrefetchedData,
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

export default debouncedProductSearch;
