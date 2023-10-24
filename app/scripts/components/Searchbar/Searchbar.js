import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { searchItems } from "../../api/services";
import { createDebouncedSearch } from "./helpers";

const Searchbar = ({
  currentResultsPage,
  isShown,
  toggleShowSearch,
  setSearchResults,
  setTotalResults,
  setPrefetchedData,
  searchValue,
  setSearchValue,
}) => {
  const debouncedSearchRef = useRef(
    createDebouncedSearch({
      action: searchItems,
      setSearchResults,
      setTotalResults,
      setPrefetchedData,
      page: currentResultsPage,
    })
  );

  useEffect(() => {
    if (searchValue) {
      debouncedSearchRef.current(searchValue, currentResultsPage);
    }
  }, [searchValue, currentResultsPage]);

  const onSearch = (e) => {
    const query = e.target.value;
    setSearchValue(query);

    if (!query || query.length < 2) {
      return;
    }
    debouncedSearchRef.current(query);
  };

  return (
    <div className={`search-container${isShown ? " showing" : ""}`}>
      <div>
        <input type="text" value={searchValue} onChange={onSearch} />
        <button
          className="search-trigger"
          aria-label={isShown ? "Hide searchbar" : "Show searchbar"}
          onClick={toggleShowSearch}
        >
          <i className={`material-icons ${isShown ? "close" : "search"}`}>
            {isShown ? "close" : "search"}
          </i>
        </button>
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  currentResultsPage: PropTypes.number.isRequired,
  isShown: PropTypes.bool.isRequired,
  setSearchResults: PropTypes.func.isRequired,
  setTotalResults: PropTypes.func.isRequired,
  toggleShowSearch: PropTypes.func.isRequired,
  setPrefetchedData: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Searchbar;
