/**
 *
 * ClientLoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CenterGrid from 'components/CenterGrid';
import LoginForm from 'components/LoginForm';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectClientLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ClientLoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenterGrid>
        <LoginForm name="client" onLogin={(e) => console.log(e)} />
      </CenterGrid>
    );
  }
}

ClientLoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientloginpage: makeSelectClientLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'clientLoginPage', reducer });
const withSaga = injectSaga({ key: 'clientLoginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientLoginPage);
