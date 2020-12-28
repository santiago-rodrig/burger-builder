import React, { Component } from "react";

import Layout from "./Layout";
import BurgerBuilder from "./BurgerBuilder";
import Checkout from "./Checkout";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    );
  }
}

export default App;
