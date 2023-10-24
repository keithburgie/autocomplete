import React, { useEffect, useState } from "react";
import { SearchResults, Searchbar } from "../Searchbar";

const ProductSearch = () => {
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

  // const hideSearch = () => setShowSearch(false);

  return (
    <>
      <Searchbar
        currentResultsPage={currentResultsPage}
        isShown={showSearch}
        searchValue={searchValue}
        setPrefetchedData={setPrefetchedData}
        setSearchResults={setSearchResults}
        setSearchValue={setSearchValue}
        setTotalResults={setTotalResults}
        toggleShowSearch={toggleShowSearch}
      />
      {showSearchResults && (
        <SearchResults
          currentResultsPage={currentResultsPage}
          numSearchResults={numSearchResults}
          prefetchedData={prefetchedData}
          searchResults={searchResults}
          setCurrentResultsPage={setCurrentResultsPage}
          setSearchResults={setSearchResults}
          setSearchValue={setSearchValue}
        />
      )}
    </>
  );
};

export default ProductSearch;
