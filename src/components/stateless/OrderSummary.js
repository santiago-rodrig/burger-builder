import React from "react";
import PropTypes from "prop-types";
import Aux from "../higuerOrder/Aux";

const OrderSummary = (props) => {
  const ingredientItemsJsx = props.ingredients.map((ingredient, index) => (
    <li
      key={`${ingredient.type}${index}-item`}
      style={{ textTransform: "capitalize" }}
    >
      {ingredient.type} x {ingredient.quantity}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientItemsJsx}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

export default OrderSummary;
