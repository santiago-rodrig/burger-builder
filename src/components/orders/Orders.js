// Libraries
import React from 'react';

// Custom components
import Order from './Order';

// CSS modules
import classes from './Orders.css';

/** The orders list */
class Orders extends React.Component {
  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <ul className={classes.Orders}>
        <Order />
      </ul>
    );
  }
}

export default Orders;
