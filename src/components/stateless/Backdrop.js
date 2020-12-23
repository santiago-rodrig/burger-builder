import React from "react";
import classes from "../../styles/Backdrop.css";
import BurgerContext from "../../contexts/Burger";

const Backdrop = () => {
  let renderedJsx = null;
  const burgerContext = React.useContext(BurgerContext);

  if (burgerContext.purchasingMode) {
    renderedJsx = (
      <BurgerContext.Consumer>
        {(context) => (
          <div
            onClick={context.deactivatePurchasingMode}
            className={classes.Backdrop}
          ></div>
        )}
      </BurgerContext.Consumer>
    );
  }

  return renderedJsx;
};

export default Backdrop;
