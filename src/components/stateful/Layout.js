import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../styles/Layout.css';
import Toolbar from '../stateless/Layout/Toolbar';
import SideDrawer from '../stateless/Layout/SideDrawer';
import LayoutContext from '../../contexts/Layout';

/** The layout that wraps most of the components
 * @class
 */
class Layout extends React.Component {
  /** The constructor of the class component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
    };

    this.handleCloseSideDrawer = this.handleCloseSideDrawer.bind(this);
    this.handleOpenSideDrawer = this.handleOpenSideDrawer.bind(this);
  }

  /** Closes the side drawer */
  handleCloseSideDrawer() {
    this.setState({sideDrawerOpen: false});
  }

  /** Opens the side drawer */
  handleOpenSideDrawer() {
    this.setState({sideDrawerOpen: true});
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <div>
        <LayoutContext.Provider
          value={{openSideDrawer: this.handleOpenSideDrawer}}
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

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
