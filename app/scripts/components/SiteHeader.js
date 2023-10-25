import React from "react";

import { Navbar, NavbarLogo, NavbarNav } from "./Navbar";
import { ProductSearch } from "./ProductSearch";

const NAV_ITEMS = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION",
];

const SiteHeader = () => {
  return (
    <header className="site-header">
      <Navbar>
        <NavbarLogo title="ELC" />
        <NavbarNav navItems={NAV_ITEMS} />
        <ProductSearch />
      </Navbar>
    </header>
  );
};

export default SiteHeader;
