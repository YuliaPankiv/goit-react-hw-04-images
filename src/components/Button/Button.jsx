import PropTypes from 'prop-types';
import { ButtonLoadMore } from './ButtonLoadMore.syled';

const Button = ({ children, onClick }) => {
  return (
    <ButtonLoadMore className="Button" onClick={onClick}>
      {children}
    </ButtonLoadMore>
  );
};
Button.defaultProps = {
  onClick: () => null,
  children: null,
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
