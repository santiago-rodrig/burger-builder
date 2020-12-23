import React from "react";
import classes from "../../styles/Layout.css";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
