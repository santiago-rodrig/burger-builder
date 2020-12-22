import React from "react";
import classes from "../../styles/index.css";

const Layout = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.mt5}>{props.children}</main>
    </div>
  );
};

export default Layout;
