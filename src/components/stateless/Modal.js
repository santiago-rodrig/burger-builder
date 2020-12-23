import React from "react";
import classes from "../../styles/Modal.css";
import Backrop from "./Backdrop";
import BurgerContext from "../../contexts/Burger";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <BurgerContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div
            style={{
              transform: context.purchasingMode
                ? "translateY(0)"
                : "translateY(-100vh)",
              opacity: context.purchasingMode ? "1" : "0",
            }}
            className={classes.Modal}
          >
            {props.children}
          </div>
          <Backrop
            open={context.purchasingMode}
            handleClick={context.deactivatePurchasingMode}
          />
        </React.Fragment>
      )}
    </BurgerContext.Consumer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
