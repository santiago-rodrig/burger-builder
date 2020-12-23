import React from "react";
import Burger from "../stateless/Burguer";
import BurgerControls from "../stateless/BurgerControls";
import BurgerContext from "../../contexts/Burger";
import Modal from "../stateless/Modal";
import OrderSummary from "../stateless/OrderSummary";

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

      noIngredients: {
        salad: true,
        bacon: true,
        meat: true,
        cheese: true,
      },
    };

    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);

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
    window.alert("Purchased!");
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
    return (
      <BurgerContext.Provider
        value={{
          noIngredients: this.state.noIngredients,
          addIngredient: this.handleAddIngredient,
          removeIngredient: this.handleRemoveIngredient,
          deactivatePurchasingMode: this.handlePurchasingDeactivation,
          purchasingMode: this.state.purchasing,
          purchase: this.handlePurchase,
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
        <Modal show={this.state.purchasing}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Modal>
      </BurgerContext.Provider>
    );
  }
}

export default BurgerBuilder;
