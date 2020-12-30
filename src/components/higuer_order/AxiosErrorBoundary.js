import React from 'react';
import PropTypes from 'prop-types';

import axios from '../../utility/axiosClient';
import Modal from '../ui/Modal';

/** An error boundary for checking axios requests errors
 * @class
 */
class AxiosErrorBoundary extends React.Component {
  /** The constructor of the component
   * @param {object} props
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {errorMessage: null};

    this.handleModalClose = this.handleModalClose.bind(this);

    this.responseInterceptorRef = React.createRef(
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
              this.setState({errorMessage: error.message});
            },
        ),
    );

    this.requestInterceptorRef = React.createRef(
        axios.interceptors.request.use(
            (request) => request,
            (error) => {
              this.setState({errorMessage: error.message});
            },
        ),
    );
  }

  /** Lifecycle hook for the following: before unmounting, free the axios
   * interceptors */
  componentWillUnmount() {
    axios.interceptors.response.eject(this.responseInterceptorRef.current);
    axios.interceptors.response.eject(this.requestInterceptorRef.current);
  }

  /** Closes the error modal */
  handleModalClose() {
    this.setState({errorMessage: null});
  }

  /** Renders the component
   * @return {React.ReactNode}
   */
  render() {
    if (this.state.errorMessage) {
      return (
        <React.Fragment>
          <Modal
            open={Boolean(this.state.errorMessage)}
            handleClose={this.handleModalClose}
          >
            Something went wrong...
          </Modal>
          {this.props.children}
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

AxiosErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default AxiosErrorBoundary;
