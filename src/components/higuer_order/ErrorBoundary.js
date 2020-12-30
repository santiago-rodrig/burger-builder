import React from 'react';
import PropTypes from 'prop-types';

/** A higuer order component for catching errors
 * @class
 */
class ErrorBoundary extends React.Component {
  /** The constructor of the class component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /** Checks for errors
   * @param {Error} error
   */
  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    if (this.state.hasError) {
      return <h3>{this.state.error.message}</h3>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
