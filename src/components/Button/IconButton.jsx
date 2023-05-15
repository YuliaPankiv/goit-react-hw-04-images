import PropTypes from 'prop-types';

const IconButton = ({ children, onSubmit, ...allyProps }) => {
  return (
    <button type="submit" onSubmit={onSubmit} {...allyProps}>
      {children}
    </button>
  );
};
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
