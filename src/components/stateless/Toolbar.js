import React from "react";
import classes from "../../styles/Toolbar.css";
import Logo from "./Logo";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
