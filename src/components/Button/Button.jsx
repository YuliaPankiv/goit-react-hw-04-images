import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
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
