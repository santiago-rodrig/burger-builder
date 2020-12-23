import React from "react";
import PropTypes from "prop-types";
import Aux from "../../higuerOrder/Aux";
import Button from "../userInterface/Button";

class OrderSummary extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.purchasing;
  }

  render() {
    const ingredientItemsJsx = this.props.ingredients.map(
      (ingredient, index) => (
        <li
          key={`${ingredient.type}${index}-item`}
          style={{ textTransform: "capitalize" }}
        >
          {ingredient.type} x {ingredient.quantity}
        </li>
      )
    );

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientItemsJsx}</ul>
        <p>
          <strong>Total Price:</strong> $ {this.props.price.toFixed(2)}
        </p>
        <p>Continue to checkout?</p>
        <Button
          type="danger"
          handleClick={this.props.handlePurchasingModeDeactivation}
        >
          CANCEL
        </Button>
        <Button type="success" handleClick={this.props.handlePurchase}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      quantity: PropTypes.number,
    })
  ).isRequired,

  price: PropTypes.number.isRequired,
  handlePurchasingModeDeactivation: PropTypes.func.isRequired,
  handlePurchase: PropTypes.func.isRequired,
  purchasing: PropTypes.bool,
};

export default OrderSummary;
