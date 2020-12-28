import React from "react";

import CheckoutSummary from "../stateless/Checkout/Summary";

class Checkout extends React.Component {
  state = {
    ingredients: [
      { type: "salad", quantity: 1 },
      { type: "meat", quantity: 1 },
      { type: "cheese", quantity: 1 },
      { type: "bacon", quantity: 1 },
    ],
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
