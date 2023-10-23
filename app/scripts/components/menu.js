import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Searchbar from "./Searchbar";
import ProductDisplay from "./ProductDisplay";

const NAV_ITEMS = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION",
];

const NavItem = ({ item }) => {
  return (
    <a href="#" className="nav-item">
      {item}
    </a>
  );
};
NavItem.propTypes = {
  item: PropTypes.string.isRequired,
};

/**
 * The Menu component that lives at the top of the Page.
 */
const Menu = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchResults.length > 0) {
      setShowSearchResults(true);
    }
  }, [searchResults]);

  // Explanation: We don't need the event or to prevent default after changing the anchor element to a button
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const hideSearch = () => setShowSearch(false);

  return (
    <>
      <header className="menu">
        <div className="menu-navbar">
          <div className="menu-logo">
            <h1>ELC</h1>
          </div>
          <nav className="menu-nav" role="navigation">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </nav>
          <Searchbar
            isShown={showSearch}
            toggleShowSearch={toggleShowSearch}
            setSearchResults={setSearchResults}
          />
        </div>
      </header>
      {showSearchResults && (
        <div className={`search-results-overlay`}>
          {searchResults.map((item) => (
            <ProductDisplay key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
