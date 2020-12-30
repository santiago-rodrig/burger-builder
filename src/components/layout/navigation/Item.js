import React from 'react';
import PropTypes from 'prop-types';

import classes from './Item.css';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={props.active ? classes.active : null} href={props.uri}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  uri: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavigationItem;
