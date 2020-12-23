import React from "react";
import BurgerImage from "../../../images/burgerLogo.png";
import classes from "../../../styles/Logo.css";
import PropTypes from "prop-types";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={BurgerImage} alt="Burger Builder logo" />
    </div>
  );
};

Logo.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Logo;
