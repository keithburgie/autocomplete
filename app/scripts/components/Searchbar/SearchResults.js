import React, { useEffect, useState } from "react";
import { ProductDisplay, ProductShowcase } from "../ProductDisplay";
import SearchResultsPagination from "./SearchResultsPagination";

import { useProductSearch } from "../ProductSearch";

const SearchResults = () => {
  const {
    searchResults,
    numSearchResults,
    currentResultsPage,
    prefetchedData,
    setSearchResults,
    setCurrentResultsPage,
    setSearchValue,
  } = useProductSearch();

  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setActiveItem(searchResults[0]);
    }
  }, [searchResults]);

  return (
    <div className="search-results-container">
      <section className="search-results">
        <h2 className="section-heading">Search Results</h2>
        <ul>
          {searchResults.map((item) => (
            <ProductDisplay
              As="li"
              key={item._id}
              product={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </ul>
        <SearchResultsPagination
          currentPageNumber={currentResultsPage}
          itemsPerPage={searchResults.length}
          numSearchResults={numSearchResults}
          setCurrentResultsPage={setCurrentResultsPage}
          prefetchedData={prefetchedData}
          setSearchResults={setSearchResults}
        />
      </section>
      <section className="search-showcase">
        {activeItem && (
          <ProductShowcase
            product={activeItem}
            setSearchValue={setSearchValue}
          />
        )}
      </section>
    </div>
  );
};

export default SearchResults;
