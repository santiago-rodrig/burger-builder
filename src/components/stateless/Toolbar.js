import React from "react";
import classes from "../../styles/Toolbar.css";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav className={classes.Navigation}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
