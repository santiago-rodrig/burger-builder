import React from "react";
import PropTypes from "prop-types";
import classes from "../../styles/Modal.css";

const Modal = (props) => {
  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
};

export default Modal;
