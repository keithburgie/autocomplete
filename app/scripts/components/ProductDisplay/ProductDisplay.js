import React from "react";
import PropTypes from "prop-types";
import { productPropType } from "./productPropTypes";

const ProductDisplay = ({ As = "div", product, activeItem, setActiveItem }) => {
  const { picture, name, price } = product;

  const isActiveItem = activeItem && activeItem._id === product._id;

  const selectProduct = () => {
    if (!activeItem || !isActiveItem) {
      setActiveItem(product);
    }
  };

  const handleClick = () => {
    selectProduct();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectProduct();
    }
  };

  return (
    <As
      className="product-display"
      data-active={isActiveItem}
      onClick={handleClick}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex="0"
    >
      <div className="product-image">
        <picture>
          <source srcSet={picture} media="(min-width: 1024px)" />
          <source srcSet={picture} media="(min-width: 768px)" />
          <img src={picture} alt={name} loading="lazy" />
        </picture>
      </div>
      <div className="product-info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
      </div>
    </As>
  );
};

ProductDisplay.propTypes = {
  As: PropTypes.elementType,
  product: productPropType.isRequired,
  activeItem: productPropType,
  setActiveItem: PropTypes.func,
};

export default ProductDisplay;
