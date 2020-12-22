import React from "react";
import classes from "../../styles/BurgerControl.css";

const BurgerControl = (props) => {
  return (
    <div className={classes.BurgerControl}>
      <div className={classes.IngredientLabel}>{props.ingredientLabel}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};

export default BurgerControl;
