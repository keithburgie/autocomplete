import React, { useState, useEffect } from "react";
import { SearchResults, Searchbar } from "./Searchbar";
import { Navbar, NavbarLogo, NavbarNav } from "./Navbar";

const NAV_ITEMS = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION",
];

/**
 * The Menu component that lives at the top of the Page.
 */
const Menu = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [numSearchResults, setTotalResults] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentResultsPage, setCurrentResultsPage] = useState(1);

  const [prefetchedData, setPrefetchedData] = useState({});

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const showSearchResultsPanel =
      searchValue.length > 0 && searchResults.length > 0;
    setShowSearchResults(showSearchResultsPanel);
  }, [searchResults, searchValue.length]);

  // Explanation: We don't need the event or to prevent default after changing the anchor element to a button
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const hideSearch = () => setShowSearch(false);

  return (
    <header className="menu">
      <Navbar>
        <NavbarLogo title="ELC" />
        <NavbarNav navItems={NAV_ITEMS} />
        <Searchbar
          isShown={showSearch}
          toggleShowSearch={toggleShowSearch}
          setSearchResults={setSearchResults}
          setTotalResults={setTotalResults}
          currentResultsPage={currentResultsPage}
          setPrefetchedData={setPrefetchedData}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Navbar>

      {showSearchResults && (
        <SearchResults
          searchResults={searchResults}
          numSearchResults={numSearchResults}
          setCurrentResultsPage={setCurrentResultsPage}
          currentResultsPage={currentResultsPage}
          setSearchResults={setSearchResults}
          prefetchedData={prefetchedData}
          setSearchValue={setSearchValue}
        />
      )}
    </header>
  );
};

export default Menu;
