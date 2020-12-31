import React from 'react';
import PropTypes from 'prop-types';
import * as ReactRouter from 'react-router-dom';

import classes from './Item.css';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <ReactRouter.NavLink
        exact
        activeClassName={classes.active}
        to={props.path}
      >
        {props.children}
      </ReactRouter.NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationItem;
