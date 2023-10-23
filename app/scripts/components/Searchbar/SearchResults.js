import React from "react";
import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results--overlay">
      <section>
        <h2 className="section-heading">Featured Results</h2>
        <div className="search-results-grid">
          {searchResults.map((item) => (
            <ProductDisplay key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-heading">Top Searches</h2>
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
};

export default SearchResults;
