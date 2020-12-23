import React from "react";
import PropTypes from "prop-types";
import Aux from "../higuerOrder/Aux";
import Button from "./Button";
import BurgerContext from "../../contexts/Burger";

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
      <p>
        <strong>Total Price:</strong> $ {props.price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <BurgerContext.Consumer>
        {(context) => (
          <React.Fragment>
            <Button
              type="danger"
              handleClick={context.deactivatePurchasingMode}
            >
              CANCEL
            </Button>
            <Button type="success" handleClick={context.purchase}>
              CONTINUE
            </Button>
          </React.Fragment>
        )}
      </BurgerContext.Consumer>
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

  price: PropTypes.number.isRequired,
};

export default OrderSummary;
