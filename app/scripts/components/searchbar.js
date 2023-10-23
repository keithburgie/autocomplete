import React, { useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "../utils";
import { searchItems } from "../api/services";

const Searchbar = ({ onClose }) => {
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
    <>
      <input type="text" value={searchValue} onChange={onSearch} />
      {/* Explanation: a button is better semantically than anchor */}
      <button aria-label="Close searchbar" onClick={onClose}>
        <i className="material-icons close">close</i>
      </button>
    </>
  );
};

Searchbar.propTypes = {
  /**
   * Handler to close or hide the search component.
   * Expected signature: (value: React.SetStateAction<boolean>) => void
   */
  onClose: PropTypes.func.isRequired,
};

export default Searchbar;
