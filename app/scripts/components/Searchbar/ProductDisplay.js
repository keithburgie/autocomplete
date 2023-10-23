import React from "react";
import PropTypes from "prop-types";

const ProductDisplay = ({ product, activeItem, setActiveItem }) => {
  const { picture, name, price, about, tags } = product;

  const handleMouseEnter = () => {
    console.log("Mouse entered", product._id);
    if (!activeItem || activeItem._id !== product._id) {
      setActiveItem(product);
    }
  };

  return (
    <div className="search-item-display" onMouseEnter={handleMouseEnter}>
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
        {/* <p>{about}</p> */}
        {/* <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

const productPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
});

ProductDisplay.propTypes = {
  product: productPropType.isRequired,
  activeItem: productPropType,
  setActiveItem: PropTypes.func,
};

export default ProductDisplay;
