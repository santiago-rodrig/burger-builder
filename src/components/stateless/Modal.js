import React from "react";
import classes from "../../styles/Modal.css";

const Modal = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default Modal;
