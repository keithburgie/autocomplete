import React from "react";
import PropTypes from "prop-types";

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

export default NavItem;
