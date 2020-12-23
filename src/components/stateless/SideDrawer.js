import React from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import classes from "../../styles/SideDrawer.css";

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
