import React from "react";
import PropTypes from "prop-types";
import classes from "../../../styles/Button.css";

const Button = (props) => {
  let buttonClasses = [classes.Button];

  switch (props.type) {
    case "danger":
      buttonClasses.push(classes.Danger);
      break;
    case "success":
      buttonClasses.push(classes.Success);
      break;
    default:
      break;
  }

  buttonClasses = buttonClasses.join(" ");

  return (
    <button className={buttonClasses} type="button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["success", "danger"]),
};

export default Button;
