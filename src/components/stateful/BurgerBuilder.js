import React from "react";
import Aux from "../higuerOrder/Aux";
import Burger from "../stateless/Burguer";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        { type: "salad", quantity: 1 },
        { type: "bacon", quantity: 1 },
        { type: "cheese", quantity: 2 },
        { type: "meat", quantity: 2 },
      ],
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
