import React, {Component} from 'react';
import * as ReactRouter from 'react-router-dom';

import Layout from './layout/Layout';
import BurgerBuilder from './burger_builder/BurgerBuilder';
import Checkout from './checkout/Checkout';
import Orders from './orders/Orders';

/** The root component
 * @class
 */
class App extends Component {
  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    return (
      <Layout>
        <ReactRouter.Switch>
          <ReactRouter.Route path="/checkout" component={Checkout} />
          <ReactRouter.Route path="/orders" component={Orders} />
          <ReactRouter.Route path="/" component={BurgerBuilder} />
        </ReactRouter.Switch>
      </Layout>
    );
  }
}

export default App;
