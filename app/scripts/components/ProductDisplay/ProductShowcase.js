import React from "react";
import { productPropType } from "./index";

const ProductShowcase = ({ product }) => {
  const { picture, name, price, about, tags } = product;

  const handleClick = () => {
    // create a button that would send a user to a page.
    // also needs a close button
  };

  return (
    <div className="product-showcase">
      <div className="product-image">
        <picture>
          <source srcSet={picture} media="(min-width: 1024px)" />
          <source srcSet={picture} media="(min-width: 768px)" />
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
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProductShowcase.propTypes = {
  product: productPropType,
};

export default ProductShowcase;
