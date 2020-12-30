import React from 'react';

import CheckoutSummary from '../stateless/Checkout/Summary';

/** The checkout component
 * @class
 */
class Checkout extends React.Component {
  /** The constructor of the checkout component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        {type: 'salad', quantity: 1},
        {type: 'meat', quantity: 1},
        {type: 'cheese', quantity: 1},
        {type: 'bacon', quantity: 1},
      ],
    };
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
