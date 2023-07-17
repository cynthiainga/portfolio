import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoadingScreen: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoadingScreen: false });
    }, 5000);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    const { showLoadingScreen } = this.state;

    return (
      <>
        {showLoadingScreen && <div>Loading Screen</div>}
        {children}
      </>
    );
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.shape(),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(ScrollToTop);
