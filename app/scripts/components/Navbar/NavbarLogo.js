import React from "react";
import PropTypes from "prop-types";

const NavbarLogo = ({ imgSrc, title }) => {
  return (
    <div className="navbar-logo">
      <a href="/">
        {imgSrc ? <img src={imgSrc} alt={title} /> : <span>{title}</span>}
      </a>
    </div>
  );
};
NavbarLogo.propTypes = {
  /**
   * `imgSrc` will be used as the src attribute for the logo image.
   */
  imgSrc: PropTypes.string,
  /**
   * `title` will be used as alt text for the logo image, or as display text if `imgSrc` is not provided.
   */
  title: PropTypes.string.isRequired,
};

export default NavbarLogo;
