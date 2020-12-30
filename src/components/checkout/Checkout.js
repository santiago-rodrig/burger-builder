import React from 'react';
import PropTypes from 'prop-types';

import CheckoutSummary from './Summary';

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
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.object,
};

export default Checkout;
