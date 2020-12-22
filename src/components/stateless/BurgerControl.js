import React from "react";
import PropTypes from "prop-types";
import classes from "../../styles/BurgerControl.css";

const BurgerControl = (props) => {
  return (
    <div className={classes.BurgerControl}>
      <div className={classes.IngredientLabel}>
        {props.ingredientDescriptor.label}
      </div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};

BurgerControl.propTypes = {
  ingredientDescriptor: PropTypes.exact({
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default BurgerControl;
