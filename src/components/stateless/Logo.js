import React from "react";
import BurgerImage from "../../images/burgerLogo.png";
import classes from "../../styles/Logo.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerImage} alt="Burger Builder logo" />
    </div>
  );
};

export default Logo;
