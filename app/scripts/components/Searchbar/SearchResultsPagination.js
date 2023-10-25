import React from "react";
import { useProductSearch } from "../ProductSearch";

const SearchResultsPagination = () => {
  const {
    numSearchResults,
    currentResultsPage,
    setCurrentResultsPage,
    prefetchedData,
    setSearchResults,
  } = useProductSearch();

  const maxItemsPerPage = 4;

  const maxPages = Math.ceil(numSearchResults / maxItemsPerPage);

  // Calculate the start and end item indices for the current page
  const startItemIndex = (currentResultsPage - 1) * maxItemsPerPage + 1;

  const endItemIndex = Math.min(
    currentResultsPage * maxItemsPerPage,
    numSearchResults
  );

  const handleNext = () => {
    setCurrentResultsPage((prevPage) => prevPage + 1);
    if (prefetchedData[currentResultsPage + 1]) {
      setSearchResults(prefetchedData[currentResultsPage + 1]);
    }
  };

  const handlePrevious = () => {
    setCurrentResultsPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="search-results-pagination">
      <button
        onClick={handlePrevious}
        style={{ opacity: currentResultsPage > 1 ? 1 : 0 }}
      >
        Previous
      </button>

      <p>
        Showing #{startItemIndex}-
        {startItemIndex === endItemIndex ? "" : `${endItemIndex} `}
        of {numSearchResults} results
      </p>

      <button
        onClick={handleNext}
        style={{ opacity: currentResultsPage < maxPages ? 1 : 0 }}
      >
        Next
      </button>
    </div>
  );
};

export default SearchResultsPagination;
