import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../burger_builder/burger/Burger';
import Button from '../ui/Button';
import classes from './Summary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <Burger ingredients={props.ingredients} />
      <Button type="danger" handleClick={props.handleCancel}>
        CANCEL
      </Button>
      <Button type="success" handleClick={props.handleContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.arrayOf(
      PropTypes.exact({
        type: PropTypes.string,
        quantity: PropTypes.number,
      }),
  ).isRequired,
  handleContinue: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CheckoutSummary;
