import PropTypes from "prop-types";

export const productPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
});
