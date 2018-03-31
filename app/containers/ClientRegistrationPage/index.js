/**
 *
 * ClientRegistrationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import RegistrationForm from 'components/RegistrationForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectClientRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { registerUser } from './actions';

export class ClientRegistrationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RegistrationForm onRegister={(e) => this.props.registerUser(e)} />
      </div>
    );
  }
}

ClientRegistrationPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientregistrationpage: makeSelectClientRegistrationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (e) => dispatch(registerUser(e)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'clientRegistrationPage', reducer });
const withSaga = injectSaga({ key: 'clientRegistrationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientRegistrationPage);
