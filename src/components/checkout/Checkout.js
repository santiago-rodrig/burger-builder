import React from 'react';
import PropTypes from 'prop-types';
import * as ReactRouter from 'react-router-dom';

import CheckoutSummary from './Summary';
import ContactData from './ContactData';

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

    // setup state
    const searchQuery = new URLSearchParams(props.location.search);
    const ingredients = [];
    let price;

    for (const param of searchQuery.entries()) {
      if (param[0] !== 'price') {
        ingredients.push({type: param[0], quantity: parseInt(param[1])});
      } else {
        price = parseFloat(param[1]);
      }
    }

    this.state = {
      ingredients,
      price,
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  /** Continues with the checkout process */
  handleContinue() {
    this.props.history.replace('/checkout/contact_data');
  }

  /** Goes back in the history object provided by the react router */
  handleCancel() {
    this.props.history.goBack();
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <div>
        <CheckoutSummary
          handleCancel={this.handleCancel}
          handleContinue={this.handleContinue}
          ingredients={this.state.ingredients}
        />
        <ReactRouter.Route
          path={this.props.match.path + '/contact_data'}
          render={(routeProps) => (
            <ContactData
              {...routeProps}
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default Checkout;
