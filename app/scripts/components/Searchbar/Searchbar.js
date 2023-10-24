import React from "react";
import { useProductSearch } from "../ProductSearch";

const SearchInputButton = () => {
  const { showSearch, toggleShowSearch } = useProductSearch();
  const action = showSearch ? "close" : "search";
  return (
    <button
      className="search-trigger"
      aria-label={action}
      onClick={toggleShowSearch}
    >
      <i className={`material-icons ${action}`}>{action}</i>
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
      <input type="text" value={searchValue} onChange={onSearch} />
      <SearchInputButton />
    </div>
  );
};

export default Searchbar;
