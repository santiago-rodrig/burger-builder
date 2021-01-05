// Libraries
import React from 'react';

// Custom components
import Order from './Order';

// Utilities
import axios from '../../utility/axiosClient';

// CSS modules
import classes from './Orders.css';

/** The orders list */
class Orders extends React.Component {
  /** The component constructor
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      loading: false,
    };
  }

  /** Lifecycle hook executed after the first render */
  componentDidMount() {
    this.setState({loading: true});

    axios
        .get('/orders.json')
        .then((response) => {
          const {data: orders} = response;
          const parsedOrders = [];

          for (const key in orders) {
            if (Object.prototype.hasOwnProperty.call(orders, key)) {
              parsedOrders.push({
                id: key,
                ...orders[key],
              });
            }
          }

          this.setState({orders: parsedOrders, loading: false});
        })
        .catch((error) => {
          console.log(error);
          this.setState({loading: false});
        });
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    const ordersJsx = this.state.orders.map((order) => (
      <Order
        key={order.id}
        price={order.price}
        ingredients={order.ingredients}
      />
    ));

    return <ul className={classes.Orders}>{ordersJsx}</ul>;
  }
}

export default Orders;
