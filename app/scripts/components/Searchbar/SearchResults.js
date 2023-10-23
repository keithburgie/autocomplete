import React from "react";
import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results-overlay">
      <div aria-label="search-results" className="search-results-container">
        <div>
          <h2>Featured Results</h2>
          <ul className="search-results-grid">
            {searchResults.map((item) => (
              <li key={item.id}>
                <ProductDisplay product={item} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Top Searches</h2>
        </div>
      </div>
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
};

export default SearchResults;
