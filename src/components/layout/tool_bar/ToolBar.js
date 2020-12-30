import React from 'react';

import classes from './ToolBar.css';
import Logo from '../Logo';
import NavigationItems from '../navigation/Items';
import SideDrawerOpener from '../side_drawer/Opener';

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
