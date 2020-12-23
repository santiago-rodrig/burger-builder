import React from "react";
import classes from "../../styles/Layout.css";
import Toolbar from "../stateless/Toolbar";
import SideDrawer from "../stateless/SideDrawer";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: true,
    };

    this.handleCloseSideDrawer = this.handleCloseSideDrawer.bind(this);
  }

  handleCloseSideDrawer() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    return (
      <div>
        <Toolbar />
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
