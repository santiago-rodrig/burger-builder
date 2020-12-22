import React from "react";
import Aux from "../higuerOrder/Aux";
import Burger from "../stateless/Burguer";

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
