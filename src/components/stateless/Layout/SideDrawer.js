import React from 'react';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import classes from '../../../styles/SideDrawer.css';
import Backdrop from '../userInterface/Backdrop';
import PropTypes from 'prop-types';
import Aux from '../../higuerOrder/Aux';

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
