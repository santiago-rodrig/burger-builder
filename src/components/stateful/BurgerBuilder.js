import React from "react";
import Aux from "../higuerOrder/Aux";
import Burger from "../stateless/Burguer";
import BurgerControls from "../stateless/BurgerControls";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
