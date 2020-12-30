import React from 'react';
import Layout from '../Layout';
import classes from './Opener.css';

const SideDrawerOpener = () => {
  return (
    <Layout.contextType.Consumer>
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
    </Layout.contextType.Consumer>
  );
};

export default SideDrawerOpener;
