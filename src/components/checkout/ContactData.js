import React from 'react';
import PropTypes from 'prop-types';

import Button from '../ui/Button';
import classes from './ContactData.css';
import axios from '../../utility/axiosClient';
import Spinner from '../ui/Spinner';
import Input from '../ui/Input';

/** The contact data component */
class ContactData extends React.Component {
  /** The constructor of the contact data component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        username: '',
        email: '',
        address: {
          street: '',
          postalCode: '',
        },
      },
      loading: false,
    };

    this.handleOrder = this.handleOrder.bind(this);
  }

  /** Handles the ordering of the burger
   * @param {React.FormEvent} event
   */
  handleOrder(event) {
    event.preventDefault();

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,

      customer: {
        name: 'Santiago Rodriguez',

        address: {
          street: 'Las Palmas',
          zipCode: '1083',
          country: 'Venezuela',
        },

        email: 'test@test.com',
      },

      deliveryMethod: 'fastest',
    };

    this.setState({loading: true});

    axios.post('/orders.json', order).then(() => {
      this.setState({loading: false});
      this.props.history.push('/');
    });
  }

  /** Renders the contact data component
   * @return {React.ReactNode}
   */
  render() {
    let formJsx = (
      <form onSubmit={this.handleOrder}>
        <Input
          inputType="input"
          type="text"
          name="name"
          placeholder="Bob Smith"
        />
        <Input type="text" name="email" placeholder="bob.smith@example.com" />
        <Input type="text" name="street" placeholder="Main St." />
        <Input type="text" name="postalCode" placeholder="23441" />
        <Button htmlType="submit" type="success">
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      formJsx = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {formJsx}
      </div>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.arrayOf(
      PropTypes.exact({
        type: PropTypes.string,
        quantity: PropTypes.number,
      }),
  ).isRequired,
  price: PropTypes.number,
  history: PropTypes.object.isRequired,
};

export default ContactData;
