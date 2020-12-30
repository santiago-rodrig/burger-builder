import React from 'react';

import NavigationItem from './Item';
import classes from './Items.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem active uri="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem uri="/">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
