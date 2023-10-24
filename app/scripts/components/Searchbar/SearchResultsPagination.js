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
  console.log(maxPages);

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
      <p>
        Showing {startItemIndex}-
        {startItemIndex === endItemIndex ? "" : `${endItemIndex} `}
        of {numSearchResults} results
      </p>
      <div>
        {currentResultsPage > 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {currentResultsPage < maxPages && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPagination;
