import React from 'react';
import PropTypes from 'prop-types';

import Burger from './burger/Burger';
import BurgerControls from './burger/Controls';
import Modal from '../ui/Modal';
import OrderSummary from './OrderSummary';
import Spinner from '../ui/Spinner';
import AxiosErrorBoundary from '../higuer_order/AxiosErrorBoundary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

/** The burger builder component
 * @class
 */
class BurgerBuilder extends React.Component {
  /** The burger builder constructor
   * @param {object} props
   */
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
        this,
    );

    this.handlePurchasingDeactivation = this.handlePurchasingDeactivation.bind(
        this,
    );
  }

  /** Adds an ingredient to the state
   * @param {string} type
   */
  handleAddIngredient(type) {
    this.setState((previousState) => {
      const ingredientIndex = previousState.ingredients.findIndex(
          (ingredient) => ingredient.type === type,
      );

      if (ingredientIndex >= 0) {
        const ingredient = previousState.ingredients[ingredientIndex];

        return {
          ingredients: [
            ...previousState.ingredients.slice(0, ingredientIndex),
            {...ingredient, quantity: ingredient.quantity + 1},
            ...previousState.ingredients.slice(ingredientIndex + 1),
          ],

          price: previousState.price + INGREDIENT_PRICES[type],
        };
      }

      return {
        ingredients: [...previousState.ingredients, {type, quantity: 1}],
        price: previousState.price + INGREDIENT_PRICES[type],
        noIngredients: {...previousState.noIngredients, [type]: false},
      };
    });
  }

  /** Activates purchasing mode state */
  handlePurchasingActivation() {
    this.setState({purchasing: true});
  }

  /** Deactivates purchasing mode state */
  handlePurchasingDeactivation() {
    this.setState({purchasing: false});
  }

  /** Purchases the burger with the current state */
  handlePurchase() {
    const searchQuery = encodeURI(
        this.state.ingredients
            .map((ingredient) => `${ingredient.type}=${ingredient.quantity}`)
            .concat([`price=${this.state.price}`])
            .join('&'),
    );

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + searchQuery,
    });
  }

  /** Removes an ingredient from the state
   * @param {string} type
   */
  handleRemoveIngredient(type) {
    this.setState((previousState) => {
      const ingredientIndex = previousState.ingredients.findIndex(
          (ingredient) => ingredient.type === type,
      );

      if (ingredientIndex >= 0) {
        const ingredient = previousState.ingredients[ingredientIndex];

        if (ingredient.quantity === 1) {
          return {
            ingredients: previousState.ingredients.filter(
                (ingredient) => ingredient.type !== type,
            ),

            price: previousState.price - INGREDIENT_PRICES[type],
            noIngredients: {...previousState.noIngredients, [type]: true},
          };
        }

        return {
          ingredients: [
            ...previousState.ingredients.slice(0, ingredientIndex),
            {...ingredient, quantity: ingredient.quantity - 1},
            ...previousState.ingredients.slice(ingredientIndex + 1),
          ],

          price: previousState.price - INGREDIENT_PRICES[type],
        };
      }

      return {};
    });
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
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
        <BurgerBuilder.contextType.Provider
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
                (noIngredient) => !noIngredient,
            )}
            activatePurchasingMode={this.handlePurchasingActivation}
          />
          <Modal
            open={this.state.purchasing}
            handleClose={this.handlePurchasingDeactivation}
          >
            {orderSummary}
          </Modal>
        </BurgerBuilder.contextType.Provider>
      </AxiosErrorBoundary>
    );
  }
}

BurgerBuilder.contextType = React.createContext();

BurgerBuilder.propTypes = {
  history: PropTypes.object,
};

export default BurgerBuilder;
