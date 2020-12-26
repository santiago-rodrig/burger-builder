import React from "react";

import Burger from "../stateless/BurgerBuilder/Burguer";
import BurgerControls from "../stateless/BurgerBuilder/BurgerControls";
import BurgerContext from "../../contexts/Burger";
import Modal from "../stateless/userInterface/Modal";
import OrderSummary from "../stateless/BurgerBuilder/OrderSummary";
import axios from "../../services/axiosClient";
import Spinner from "../stateless/userInterface/Spinner";
import AxiosErrorBoundary from "../higuerOrder/AxiosErrorBoundary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      price: 4,
      purchasing: false,
      loading: false,
      noIngredients: {
        salad: true,
        bacon: true,
        meat: true,
        cheese: true,
      },
    };

    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);

    this.handlePurchasingActivation = this.handlePurchasingActivation.bind(
      this
    );

    this.handlePurchasingDeactivation = this.handlePurchasingDeactivation.bind(
      this
    );
  }
  handleAddIngredient(type) {
    this.setState((previousState) => {
      const ingredientIndex = previousState.ingredients.findIndex(
        (ingredient) => ingredient.type === type
      );

      if (ingredientIndex >= 0) {
        const ingredient = previousState.ingredients[ingredientIndex];

        return {
          ingredients: [
            ...previousState.ingredients.slice(0, ingredientIndex),
            { ...ingredient, quantity: ingredient.quantity + 1 },
            ...previousState.ingredients.slice(ingredientIndex + 1),
          ],

          price: previousState.price + INGREDIENT_PRICES[type],
        };
      }

      return {
        ingredients: [...previousState.ingredients, { type, quantity: 1 }],
        price: previousState.price + INGREDIENT_PRICES[type],
        noIngredients: { ...previousState.noIngredients, [type]: false },
      };
    });
  }

  handlePurchasingActivation() {
    this.setState({ purchasing: true });
  }

  handlePurchasingDeactivation() {
    this.setState({ purchasing: false });
  }

  handlePurchase() {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,

      customer: {
        name: "Santiago Rodriguez",

        address: {
          street: "Las Palmas",
          zipCode: "1083",
          country: "Venezuela",
        },

        email: "test@test.com",
      },

      deliveryMethod: "fastest",
    };

    this.setState({ loading: true });

    axios
      .post("/orders.json", order)
      .then(() => this.setState({ loading: false, purchasing: false }));
  }

  handleRemoveIngredient(type) {
    this.setState((previousState) => {
      const ingredientIndex = previousState.ingredients.findIndex(
        (ingredient) => ingredient.type === type
      );

      if (ingredientIndex >= 0) {
        const ingredient = previousState.ingredients[ingredientIndex];

        if (ingredient.quantity === 1) {
          return {
            ingredients: previousState.ingredients.filter(
              (ingredient) => ingredient.type !== type
            ),

            price: previousState.price - INGREDIENT_PRICES[type],
            noIngredients: { ...previousState.noIngredients, [type]: true },
          };
        }

        return {
          ingredients: [
            ...previousState.ingredients.slice(0, ingredientIndex),
            { ...ingredient, quantity: ingredient.quantity - 1 },
            ...previousState.ingredients.slice(ingredientIndex + 1),
          ],

          price: previousState.price - INGREDIENT_PRICES[type],
        };
      }

      return {};
    });
  }

  render() {
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.price}
        handlePurchasingModeDeactivation={this.handlePurchasingDeactivation}
        handlePurchase={this.handlePurchase}
        purchasing={this.state.purchasing}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <AxiosErrorBoundary>
        <BurgerContext.Provider
          value={{
            noIngredients: this.state.noIngredients,
            addIngredient: this.handleAddIngredient,
            removeIngredient: this.handleRemoveIngredient,
          }}
        >
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            price={this.state.price}
            purchasable={Object.values(this.state.noIngredients).some(
              (noIngredient) => !noIngredient
            )}
            activatePurchasingMode={this.handlePurchasingActivation}
          />
          <Modal
            open={this.state.purchasing}
            handleClose={this.handlePurchasingDeactivation}
          >
            {orderSummary}
          </Modal>
        </BurgerContext.Provider>
      </AxiosErrorBoundary>
    );
  }
}
export default BurgerBuilder;
