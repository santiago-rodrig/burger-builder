import React from "react";
import classes from "../../styles/Layout.css";
import Toolbar from "../stateless/Layout/Toolbar";
import SideDrawer from "../stateless/Layout/SideDrawer";
import LayoutContext from "../../contexts/Layout";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
    };

    this.handleCloseSideDrawer = this.handleCloseSideDrawer.bind(this);
    this.handleOpenSideDrawer = this.handleOpenSideDrawer.bind(this);
  }

  handleCloseSideDrawer() {
    this.setState({ sideDrawerOpen: false });
  }

  handleOpenSideDrawer() {
    this.setState({ sideDrawerOpen: true });
  }

  render() {
    return (
      <div>
        <LayoutContext.Provider
          value={{ openSideDrawer: this.handleOpenSideDrawer }}
        >
          <Toolbar />
        </LayoutContext.Provider>
        <SideDrawer
          open={this.state.sideDrawerOpen}
          handleClose={this.handleCloseSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
