import React from 'react';
import PropTypes from 'prop-types';

import classes from './Control.css';
import BurgerBuilder from '../BurgerBuilder';

const BurgerControl = (props) => {
  return (
    <div className={classes.BurgerControl}>
      <div className={classes.IngredientLabel}>
        {props.ingredientDescriptor.label}
      </div>
      <BurgerBuilder.contextType.Consumer>
        {(context) => (
          <React.Fragment>
            <button
              className={classes.Less}
              onClick={() =>
                context.removeIngredient(props.ingredientDescriptor.type)
              }
              disabled={context.noIngredients[props.ingredientDescriptor.type]}
            >
              Less
            </button>
            <button
              className={classes.More}
              onClick={() =>
                context.addIngredient(props.ingredientDescriptor.type)
              }
            >
              More
            </button>
          </React.Fragment>
        )}
      </BurgerBuilder.contextType.Consumer>
    </div>
  );
};

BurgerControl.propTypes = {
  ingredientDescriptor: PropTypes.exact({
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default BurgerControl;
