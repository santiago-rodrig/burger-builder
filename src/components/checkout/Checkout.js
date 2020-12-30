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
      ingredients: [],
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  /** Licfecycle hook called after the first render */
  componentDidMount() {
    const searchQuery = new URLSearchParams(this.props.location.search);
    const updatedIngredients = [];

    for (const param of searchQuery.entries()) {
      updatedIngredients.push({type: param[0], quantity: parseInt(param[1])});
    }

    this.setState({ingredients: updatedIngredients});
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
  location: PropTypes.object,
};

export default Checkout;
