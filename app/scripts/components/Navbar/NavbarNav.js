import React from "react";
import PropTypes from "prop-types";
import NavItem from "./NavItem";

const NavbarNav = ({ navItems }) => {
  return (
    <nav className="menu-nav" role="navigation">
      {navItems.map((item) => (
        <NavItem key={item} item={item} />
      ))}
    </nav>
  );
};
NavbarNav.propTypes = {
  navItems: PropTypes.node.isRequired,
};

export default NavbarNav;
