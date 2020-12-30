import React from 'react';
import classes from '../../../styles/Toolbar.css';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import SideDrawerOpener from './SideDrawerOpener';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerOpener />
      <Logo height="80%" />
      <nav className={classes.Navigation}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
