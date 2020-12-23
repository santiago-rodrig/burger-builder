import React from "react";
import LayoutContext from "../../contexts/Layout";

const SideDrawerOpener = () => {
  return (
    <LayoutContext.Consumer>
      {(context) => <div onClick={context.openSideDrawer}>MENU</div>}
    </LayoutContext.Consumer>
  );
};

export default SideDrawerOpener;
