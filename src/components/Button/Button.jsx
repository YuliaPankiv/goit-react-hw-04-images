import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button className={Button} onClick={loadMore}>
      load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
