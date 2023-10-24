import PropTypes from "prop-types";
import ProductDisplay from "./ProductDisplay";
import ProductShowcase from "./ProductShowcase";

const productPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export { ProductDisplay, ProductShowcase, productPropType };
