import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { searchItems } from "../api/services";
import { createDebouncedSearch } from "../utils";

const Searchbar = ({ isShown, toggleShowSearch, setSearchResults }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = createDebouncedSearch(searchItems, setSearchResults);

  /**
   * Calls upon search change.
   * @param {Event} e - The event from a text change handler.
   */
  const onSearch = (e) => {
    const query = e.target.value;
    setSearchValue(query);

    if (!query || query.length < 2) {
      return;
    }

    debouncedSearch(query);
  };

  return (
    <>
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
    </>
  );
};

Searchbar.propTypes = {
  /**
   * Whether or not the search component is shown.
   */
  isShown: PropTypes.bool.isRequired,
  /**
   * Handler to close or hide the search component.
   * Expected signature: (value: React.SetStateAction<boolean>) => void
   */
  setSearchResults: PropTypes.func.isRequired,
  /**
   * Handler to close or hide the search component.
   * Expected signature: (value: React.SetStateAction<boolean>) => void
   */
  toggleShowSearch: PropTypes.func.isRequired,
};

export default Searchbar;
