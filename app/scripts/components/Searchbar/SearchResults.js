import React, { useEffect, useState } from "react";
import { ProductDisplay, ProductShowcase } from "../ProductDisplay";
import SearchResultsPagination from "./SearchResultsPagination";
import { useProductSearch } from "../ProductSearch";
import { CSSTransition } from "react-transition-group";

const SearchResults = () => {
  const { searchResults, setSearchValue } = useProductSearch();

  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setActiveItem(searchResults[0]);
    }
  }, [searchResults]);

  // Handle showcase transition
  const [showcaseProduct, setShowcaseProduct] = useState(activeItem);
  const [showShowcase, setShowShowcase] = useState(false);

  useEffect(() => {
    setShowShowcase(false);
    setShowcaseProduct(activeItem);
  }, [activeItem]);

  useEffect(() => {
    setShowShowcase(true);
  }, [showcaseProduct]);

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
        <SearchResultsPagination />
      </section>
      <section className="search-showcase">
        {activeItem && (
          <CSSTransition
            in={showShowcase}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <ProductShowcase
              product={showcaseProduct || activeItem}
              setSearchValue={setSearchValue}
            />
          </CSSTransition>
        )}
      </section>
    </div>
  );
};

export default SearchResults;
