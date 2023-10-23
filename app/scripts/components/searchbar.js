import React, { useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "../utils";
import { searchItems } from "../api/services";

const Searchbar = ({ isShown, toggleShowSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  /**
   * Debounced search function
   */
  const debouncedSearch = debounce(async (query) => {
    try {
      const data = await searchItems(query);
      console.log(data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, 300); // Waits for 300ms pause in typing before executing

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
    <div className={`search-container${isShown ? " showing" : ""}`}>
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
  toggleShowSearch: PropTypes.func.isRequired,
};

export default Searchbar;
