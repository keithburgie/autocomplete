import React from "react";

import { useProductSearch } from "../ProductSearch";

const Searchbar = () => {
  const { showSearch, searchValue, setSearchValue, toggleShowSearch } =
    useProductSearch();

  const onSearch = (e) => {
    const query = e.target.value;
    setSearchValue(query);
  };

  return (
    <div className={`search-container${showSearch ? " showing" : ""}`}>
      <div>
        <input type="text" value={searchValue} onChange={onSearch} />
        <button
          className="search-trigger"
          aria-label={showSearch ? "Hide searchbar" : "Show searchbar"}
          onClick={toggleShowSearch}
        >
          <i className={`material-icons ${showSearch ? "close" : "search"}`}>
            {showSearch ? "close" : "search"}
          </i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
