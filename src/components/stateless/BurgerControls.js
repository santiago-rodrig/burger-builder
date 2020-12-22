import React from "react";
import BurgerControl from "./BurgerControl";
import classes from "../../styles/BurgerControls.css";

const BurgerControls = (props) => {
  return (
    <div className={classes.BurgerControls}>
      <BurgerControl ingredientDescriptor={{ label: "Salad", type: "salad" }} />
      <BurgerControl ingredientDescriptor={{ label: "Bacon", type: "bacon" }} />
      <BurgerControl
        ingredientDescriptor={{ label: "Cheese", type: "cheese" }}
      />
      <BurgerControl ingredientDescriptor={{ label: "Meat", type: "meat" }} />
    </div>
  );
};

export default BurgerControls;
