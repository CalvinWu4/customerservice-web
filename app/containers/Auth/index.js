/**
 *
 * Auth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuth from './selectors';
import makeSelectApplication from './../Application/selectors';
import reducer from './reducer';
import saga from './saga';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { token } = this.props.application;
    if (token.length === 0) this.props.redirectTo('/login');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.node,
  application: PropTypes.object.isRequired,
  redirectTo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Auth);
