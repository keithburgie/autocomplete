import React from "react";
import PropTypes from "prop-types";

const SearchResultsPagination = ({
  currentPageNumber,
  itemsPerPage,
  numSearchResults,
  setCurrentResultsPage,
  prefetchedData,
  setSearchResults,
}) => {
  const getFirstItemIndex = () => {
    return (currentPageNumber - 1) * itemsPerPage + 1;
  };
  const getLastItemIndex = () => {
    const itemIndex = getFirstItemIndex() + itemsPerPage - 1;
    return itemIndex > numSearchResults ? numSearchResults : itemIndex;
  };

  const firstItemIndex = getFirstItemIndex();
  const lastItemIndex = getLastItemIndex();

  const getDisplayedRange = () => {
    if (firstItemIndex === lastItemIndex) {
      return `${lastItemIndex}`;
    }
    return `${firstItemIndex}-${lastItemIndex}`;
  };

  const handlePrevClick = () => {
    const newPage = currentPageNumber - 1;
    if (prefetchedData[newPage]) {
      setSearchResults(prefetchedData[newPage]);
    }
    setCurrentResultsPage(newPage);
  };

  const handleNextClick = () => {
    const newPage = currentPageNumber + 1;
    if (prefetchedData[newPage]) {
      setSearchResults(prefetchedData[newPage]);
    }
    setCurrentResultsPage(newPage);
  };

  const hasMultiplePages = numSearchResults > itemsPerPage;

  const isLastPage =
    currentPageNumber === Math.ceil(numSearchResults / itemsPerPage);

  return (
    <div className="search-results-pagination">
      <p>
        Showing {getDisplayedRange()} of {numSearchResults} results
      </p>
      {currentPageNumber > 1 && (
        <button onClick={handlePrevClick}>Previous</button>
      )}

      {hasMultiplePages && !isLastPage && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
};

SearchResultsPagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  numSearchResults: PropTypes.number.isRequired,
  setCurrentResultsPage: PropTypes.func.isRequired,
  prefetchedData: PropTypes.object.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchResultsPagination;
