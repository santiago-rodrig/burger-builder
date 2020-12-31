// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// CSS modules
import classes from './Order.css';

/** A single order
 * @param {object} props
 * @return {React.ReactNode}
 */
function Order(props) {
  const ingredientsJsx = props.ingredients.map((ingredient) => (
    <span
      style={{
        textTransform: 'capitalize',
        border: '1px solid #ccc',
        padding: 8,
        display: 'inline-block',
        margin: '0 8px',
      }}
      key={ingredient.type}
    >{`${ingredient.type} (${ingredient.quantity})`}</span>
  ));

  return (
    <li className={classes.Order}>
      <p>Ingredients: {ingredientsJsx}</p>
      <p>
        Price: <strong>$ {props.price.toFixed(2)}</strong>
      </p>
    </li>
  );
}

Order.propTypes = {
  ingredients: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        quantity: PropTypes.number,
      }),
  ).isRequired,
  price: PropTypes.number.isRequired,
};

export default Order;
