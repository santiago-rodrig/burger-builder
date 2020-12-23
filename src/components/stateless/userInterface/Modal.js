import React from "react";
import classes from "../../../styles/Modal.css";
import Backrop from "./Backdrop";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          transform: props.open ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.open ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
      <Backrop open={props.open} handleClick={props.handleClose} />
    </React.Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
