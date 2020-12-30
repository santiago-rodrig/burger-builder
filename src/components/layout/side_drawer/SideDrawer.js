import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import NavigationItems from '../navigation/Items';
import classes from './SideDrawer.css';
import Backdrop from '../../ui/Backdrop';
import Aux from '../../higuer_order/Aux';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses.splice(1, 1, [classes.Open]);
  }

  attachedClasses = attachedClasses.join(' ');

  return (
    <Aux>
      <div className={attachedClasses}>
        <Logo height={56} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <Backdrop open={props.open} handleClick={props.handleClose} />
    </Aux>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

export default SideDrawer;
