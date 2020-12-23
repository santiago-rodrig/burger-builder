import React from "react";
import classes from "../../styles/Layout.css";
import Toolbar from "./Toolbar";

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
