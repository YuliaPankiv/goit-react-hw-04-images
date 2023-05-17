import PropTypes from 'prop-types';
import { IconButtonWrap } from './IconButton.styled';

const IconButton = ({ children, onSubmit, ...allyProps }) => {
  return (
    <IconButtonWrap type="submit" onSubmit={onSubmit} {...allyProps}>
      {children}
    </IconButtonWrap>
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
