import React from "react";
import { useProductSearch } from "../ProductSearch";

const SearchButton = () => {
  const { searchValue } = useProductSearch();

  const handleSearch = () => {
    window.alert("On a real website, you'd be taken to a search results page");
  };
  return (
    <button
      className="search-button"
      aria-label="search"
      onClick={handleSearch}
      disabled={searchValue.length === 0}
    >
      <i className="material-icons search">search</i>
    </button>
  );
};

const ClearButton = () => {
  const { setSearchValue } = useProductSearch();
  return (
    <button
      className="clear-search-button"
      aria-label="clear search"
      onClick={() => setSearchValue("")}
    >
      <i className="material-icons close">close</i>
    </button>
  );
};

const Searchbar = () => {
  const { showSearch, searchValue, setSearchValue } = useProductSearch();

  const onSearch = (e) => {
    const query = e.target.value;
    setSearchValue(query);
  };

  const classNames = ["search-input-container"];
  if (showSearch) {
    classNames.push("showing");
  }

  return (
    <div className={classNames.join(" ")}>
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search ELC"
          value={searchValue}
          onChange={onSearch}
        />
        {searchValue.length > 0 && <ClearButton />}
      </div>
      <SearchButton />
    </div>
  );
};

export default Searchbar;
