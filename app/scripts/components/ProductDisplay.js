import React from "react";
import PropTypes from "prop-types";

const ProductDisplay = ({ product }) => {
  const { picture, name, price, about, tags } = product;
  return (
    <div className="product-display">
      <div className="product-display__image">
        <picture>
          <source srcSet={picture} media="(min-width: 1024px)" />
          <source srcSet={picture} media="(min-width: 768px)" />
          <img src={picture} alt={name} loading="lazy" />
        </picture>
      </div>
      <div className="product-display__info">
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
