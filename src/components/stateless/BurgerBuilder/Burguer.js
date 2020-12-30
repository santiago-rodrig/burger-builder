import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import classes from '../../../styles/Burger.css';
import PropTypes from 'prop-types';

const Burger = (props) => {
  let ingredientsJsx = props.ingredients.reduce((accumulator, ingredient) => {
    for (let i = 0; i < ingredient.quantity; i += 1) {
      accumulator.push(
          <BurgerIngredient
            key={`${ingredient.type}${i}`}
            type={ingredient.type}
          />,
      );
    }

    return accumulator;
  }, []);

  if (ingredientsJsx.length === 0) {
    ingredientsJsx = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsJsx}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.arrayOf(
      PropTypes.exact({
        type: PropTypes.string,
        quantity: PropTypes.number,
      }),
  ).isRequired,
};

export default Burger;
