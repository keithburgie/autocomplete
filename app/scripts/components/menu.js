import React, { useState } from "react";
import PropTypes from "prop-types";
import Searchbar from "./searchbar";

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

  // Explanation: We don't need the event or to prevent default after changing the anchor element to a button
  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const hideSearch = () => setShowSearch(false);

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item} item={item} />
            ))}

            {/* Explanation: a button is better semantically than anchor */}
            <button aria-label="Show searchbar" onClick={toggleShowSearch}>
              <i className="material-icons search">search</i>
            </button>
          </nav>
        </div>
      </div>
      <div className={`${showSearch ? "showing" : ""} search-container`}>
        <Searchbar onClose={hideSearch} />
      </div>
    </header>
  );
};

export default Menu;
