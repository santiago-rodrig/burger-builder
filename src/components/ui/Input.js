import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

/** Input component
 * @param {object} props
 * @return {React.ReactElement}
 * */
function Input(props) {
  let inputElement = null;
  const {inputType: propsInputType, label: propsLabel, ...propsHTML} = props;

  switch (propsInputType) {
    case 'textarea':
      inputElement = (
        <textarea className={classes.InputElement} {...propsHTML}></textarea>
      );
      break;
    default:
      inputElement = <input className={classes.InputElement} {...propsHTML} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{propsLabel}</label>
      {inputElement}
    </div>
  );
}

Input.propTypes = {
  inputType: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
