import React from 'react';
import LayoutContext from '../../../contexts/Layout';
import classes from '../../../styles/SideDrawerOpener.css';

const SideDrawerOpener = () => {
  return (
    <LayoutContext.Consumer>
      {(context) => (
        <div
          className={classes.SideDrawerOpener}
          onClick={context.openSideDrawer}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </LayoutContext.Consumer>
  );
};

export default SideDrawerOpener;
