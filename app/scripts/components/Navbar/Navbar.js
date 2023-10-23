import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ children }) => {
  return <div className="menu-navbar">{children}</div>;
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
