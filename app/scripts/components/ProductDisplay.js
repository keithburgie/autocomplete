import React from "react";
import PropTypes from "prop-types";

const ProductDisplay = ({ product }) => {
  const { picture, name, price, about, tags } = product;
  return (
    <div className="product-display">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <h3>${price}</h3>
      {/* <p>{about}</p> */}
      {/* <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductDisplay;
