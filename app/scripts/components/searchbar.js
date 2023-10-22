import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onClose }) => {
  /**
   * Calls upon search change.
   * @param {Event} e - The event from a text change handler.
   */
  const onSearch = (e) => {
    // Start Here
    // ...
  };

  return (
    <>
      <input type="text" onChange={onSearch} />
      {/* Explanation: a button is better semantically than anchor */}
      <button aria-label="Close searchbar" onClick={onClose}>
        <i className="material-icons close">close</i>
      </button>
    </>
  );
};

Searchbar.propTypes = {
  /**
   * Handler to close or hide the search component.
   * Expected signature: (value: React.SetStateAction<boolean>) => void
   */
  onClose: PropTypes.func.isRequired,
};

export default Searchbar;
