import React from 'react';

import NavigationItem from './Item';
import classes from './Items.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem path="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem path="/orders">
        Orders
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
