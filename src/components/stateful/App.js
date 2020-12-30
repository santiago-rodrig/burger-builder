import React, {Component} from 'react';
import * as ReactRouter from 'react-router-dom';

import Layout from './Layout';
import BurgerBuilder from './BurgerBuilder';
import Checkout from './Checkout';

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
          <ReactRouter.Route path="/" component={BurgerBuilder} />
        </ReactRouter.Switch>
      </Layout>
    );
  }
}

export default App;
