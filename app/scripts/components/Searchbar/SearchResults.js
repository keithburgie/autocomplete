import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProductDisplay, ProductShowcase } from "../ProductDisplay";
import SearchResultsPagination from "./SearchResultsPagination";

const SearchResults = ({
  searchResults,
  numSearchResults,
  currentResultsPage,
  setCurrentResultsPage,
  prefetchedData,
  setSearchResults,
  setSearchValue,
}) => {
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
        {/* <h2 className="section-heading">Top Searches?</h2> */}
        {/* <div className="active-item-preview"> */}
        {activeItem && (
          <ProductShowcase
            product={activeItem}
            setSearchValue={setSearchValue}
          />
        )}
        {/* </div> */}
      </section>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      isActive: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  numSearchResults: PropTypes.number.isRequired,
  currentResultsPage: PropTypes.number.isRequired,
  setCurrentResultsPage: PropTypes.func.isRequired,
  prefetchedData: PropTypes.object.isRequired,
  setSearchResults: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchResults;
