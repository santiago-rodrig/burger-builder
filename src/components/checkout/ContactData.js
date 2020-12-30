import React from 'react';

import Button from '../ui/Button';
import classes from './ContactData.css';

/** The contact data component */
class ContactData extends React.Component {
  /** The constructor of the contact data component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      address: {
        street: '',
        postalCode: '',
      },
    };
  }

  /** Renders the contact data component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="Bob Smith" />
          <input type="text" name="email" placeholder="bob.smith@example.com" />
          <input type="text" name="street" placeholder="Main St." />
          <input type="text" name="postalCode" placeholder="23441" />
          <Button htmlType="submit" type="success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
