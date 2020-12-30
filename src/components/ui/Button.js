import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const Button = (props) => {
  let buttonClasses = [classes.Button];

  switch (props.type) {
    case 'danger':
      buttonClasses.push(classes.Danger);
      break;
    case 'success':
      buttonClasses.push(classes.Success);
      break;
    default:
      break;
  }

  buttonClasses = buttonClasses.join(' ');

  return (
    <button
      className={buttonClasses}
      type={props.htmlType}
      onClick={props.handleClick || null}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  htmlType: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['success', 'danger']),
  htmlType: PropTypes.string,
};

export default Button;
