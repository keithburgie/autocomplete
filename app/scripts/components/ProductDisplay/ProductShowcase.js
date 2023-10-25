import React from "react";
import PropTypes from "prop-types";
import { productPropType } from "./productPropTypes";

const ProductShowcase = ({ product, setSearchValue }) => {
  const { picture, name, price, about, tags } = product;

  const handleSearchTagClick = (tag) => {
    setSearchValue(tag);
  };

  return (
    <div className="product-showcase">
      <div className="product-image">
        <picture>
          {/* If other sizes were available... */}
          {/* <source srcSet={picture-lg} media="(min-width: 1024px)" /> */}
          {/* <source srcSet={picture-md} media="(min-width: 768px)" /> */}
          <img src={picture} alt={name} loading="lazy" />
        </picture>
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-info">{about}</p>
        <div className="tags">
          <h3>Related Searches:</h3>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <button
                  aria-label={`Search for ${tag}`}
                  title={`Search for ${tag}`}
                  onClick={() => handleSearchTagClick(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProductShowcase.propTypes = {
  product: productPropType,
  setSearchValue: PropTypes.func.isRequired,
};

export default ProductShowcase;
