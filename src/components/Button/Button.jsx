import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ changePage }) => {
  return (
    <div className={css.buttonWrapper}>
      <button type="button" onClick={changePage} className={css.button}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
