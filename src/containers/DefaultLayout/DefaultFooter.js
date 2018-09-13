import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="mailto:javierdj22@gmail.com">Amigo</a> &copy; 2018 By Creative Team Lindley.</span>
        <span className="ml-auto">Desarrollo by <a href="mailto:javierdj22@gmail.com"> Web y Movil</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
