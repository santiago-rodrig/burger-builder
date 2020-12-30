import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../BurgerBuilder/Burguer';
import Button from '../userInterface/Button';
import classes from '../../../styles/CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="danger" handleClick={() => {}}>
        CANCEL
      </Button>
      <Button type="success" handleClick={() => {}}>
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
};

export default CheckoutSummary;
