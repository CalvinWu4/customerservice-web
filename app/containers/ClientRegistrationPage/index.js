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

export class ClientRegistrationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RegistrationForm onRegister={(e) => console.log(e)} />
      </div>
    );
  }
}

ClientRegistrationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientregistrationpage: makeSelectClientRegistrationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
