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

const devSearchResults = [
  {
    _id: "001",
    isActive: "true",
    price: "20.00",
    picture: "/img/products/N0CA_430.png",
    name: "Damage Reverse Oil Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "oil", "conditioner"],
  },
  {
    _id: "002",
    isActive: "true",
    price: "22.00",
    picture: "/img/products/N0EN01_430.png",
    name: "Volume Advance Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "conditioner"],
  },
  {
    _id: "008",
    isActive: "true",
    price: "27.00",
    picture: "/img/products/N0PL01_430.png",
    name: "Super Sleek Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "conditioner"],
  },
  {
    _id: "011",
    isActive: "true",
    price: "22.00",
    picture: "/img/products/N08Y_430.png",
    name: "Dry Recovery Hydrating Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "hydrating", "conditioner"],
  },
  {
    _id: "012",
    isActive: "true",
    price: "12.00",
    picture: "/img/products/N12R01_430.png",
    name: "Rare Blend Deep Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "conditioner", "rare blend"],
  },
  {
    _id: "013",
    isActive: "true",
    price: "25.00",
    picture: "/img/products/N13J01_430.png",
    name: "Rare Blend Moisture-Rich Cleansing Conditioner",
    about:
      "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    tags: ["ojon", "cleansing", "conditioner", "rare blend"],
  },
];

const initialSearchResults = [];
// const initialSearchResults = devSearchResults

/**
 * The Menu component that lives at the top of the Page.
 */
const Menu = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchResults.length > 0) {
      console.log(searchResults);
      setShowSearchResults(true);
    }
  }, [searchResults]);

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
        />
      </Navbar>

      {showSearchResults && <SearchResults searchResults={searchResults} />}
    </header>
  );
};

export default Menu;
