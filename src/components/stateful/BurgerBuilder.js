import React from "react";
import Burger from "../stateless/Burguer";
import BurgerControls from "../stateless/BurgerControls";
import BurgerContext from "../../contexts/Burger";

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
    };

    this.handleAddIngredient = this.handleAddIngredient.bind(this);
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
      };
    });
  }

  render() {
    return (
      <BurgerContext.Provider
        value={{
          addIngredient: this.handleAddIngredient,
        }}
      >
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </BurgerContext.Provider>
    );
  }
}

export default BurgerBuilder;
