import React from 'react';
import PropTypes from 'prop-types';

import BurgerImage from './burger_logo.png';
import classes from './Logo.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={BurgerImage} alt="Burger Builder logo" />
    </div>
  );
};

Logo.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Logo;
