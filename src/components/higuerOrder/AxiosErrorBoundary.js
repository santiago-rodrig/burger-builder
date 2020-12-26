import React from "react";
import PropTypes from "prop-types";

import axios from "../../services/axiosClient";
import Modal from "../stateless/userInterface/Modal";

class AxiosErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorMessage: null };

    this.handleModalClose = this.handleModalClose.bind(this);

    this.responseInterceptorRef = React.createRef(
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ errorMessage: error.message });
        }
      )
    );

    this.requestInterceptorRef = React.createRef(
      axios.interceptors.request.use(
        (request) => request,
        (error) => {
          this.setState({ errorMessage: error.message });
        }
      )
    );
  }

  componentWillUnmount() {
    axios.interceptors.response.eject(this.responseInterceptorRef.current);
    axios.interceptors.response.eject(this.requestInterceptorRef.current);
  }

  handleModalClose() {
    this.setState({ errorMessage: null });
  }

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
