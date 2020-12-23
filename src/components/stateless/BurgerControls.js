import React from "react";
import PropTypes from "prop-types";
import BurgerControl from "./BurgerControl";
import classes from "../../styles/BurgerControls.css";

const BurgerControls = (props) => {
  return (
    <div className={classes.BurgerControls}>
      <p>Current price: {props.price.toFixed(2)}</p>
      <BurgerControl ingredientDescriptor={{ label: "Salad", type: "salad" }} />
      <BurgerControl ingredientDescriptor={{ label: "Bacon", type: "bacon" }} />
      <BurgerControl
        ingredientDescriptor={{ label: "Cheese", type: "cheese" }}
      />
      <BurgerControl ingredientDescriptor={{ label: "Meat", type: "meat" }} />
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

BurgerControls.propTypes = {
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
};

export default BurgerControls;
