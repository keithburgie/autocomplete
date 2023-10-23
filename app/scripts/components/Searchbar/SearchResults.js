import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";
import SearchResultsPagination from "./SearchResultsPagination";

const SearchResults = ({
  searchResults,
  numSearchResults,
  currentResultsPage,
  setCurrentResultsPage,
  prefetchedData,
  setSearchResults,
}) => {
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    console.log("Active item updated:", activeItem);
  }, [activeItem]);
  return (
    <div className="search-results--overlay">
      <section>
        <h2 className="section-heading">Featured Results</h2>
        <div className="search-results-grid">
          {searchResults.map((item) => (
            <ProductDisplay
              key={item._id}
              product={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </div>
        <SearchResultsPagination
          currentPageNumber={currentResultsPage}
          itemsPerPage={searchResults.length}
          numSearchResults={numSearchResults}
          setCurrentResultsPage={setCurrentResultsPage}
          prefetchedData={prefetchedData}
          setSearchResults={setSearchResults}
        />
      </section>
      <section>
        <h2 className="section-heading">Top Searches?</h2>
        <div className="active-item-preview">
          {activeItem && (
            <ProductDisplay
              product={activeItem}
              activeItem={null}
              setActiveItem={() => {}}
            />
          )}
        </div>
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
  setPrefetchedData: PropTypes.func.isRequired,
  prefetchedData: PropTypes.object.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchResults;
