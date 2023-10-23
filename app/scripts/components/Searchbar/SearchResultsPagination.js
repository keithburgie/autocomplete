import React from "react";
import PropTypes from "prop-types";

const SearchResultsPagination = ({
  currentPageNumber,
  itemsPerPage,
  numSearchResults,
  setCurrentResultsPage,
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
    setCurrentResultsPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentResultsPage((prevPage) => prevPage + 1);
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
};

export default SearchResultsPagination;
