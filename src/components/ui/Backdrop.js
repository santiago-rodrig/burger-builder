import React from 'react';
import classes from './Backdrop.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
  let renderedJsx = null;

  if (props.open) {
    renderedJsx = (
      <div onClick={props.handleClick} className={classes.Backdrop}></div>
    );
  }

  return renderedJsx;
};

Backdrop.propTypes = {
  handleClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default Backdrop;
