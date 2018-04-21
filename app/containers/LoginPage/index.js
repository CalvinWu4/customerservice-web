/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import LoginContentWrapper from 'components/LoginContentWrapper';
import LoginForm from 'components/LoginForm';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoginContentWrapper goHome={() => this.props.redirectTo('/')} goSignup={() => this.props.redirectTo('/signup')}>
        <LoginForm onLogin={(e) => console.log(e)} />
      </LoginContentWrapper>
    );
  }
}

LoginPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LoginPage);
