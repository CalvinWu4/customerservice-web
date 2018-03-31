/**
 *
 * AgentLoginPage
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
import makeSelectAgentLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { authenticateUser } from './actions';

export class AgentLoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenterGrid>
        <LoginForm name="agent" onLogin={() => this.props.authenticateUser()} />
      </CenterGrid>
    );
  }
}

AgentLoginPage.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  agentloginpage: makeSelectAgentLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    authenticateUser: () => dispatch(authenticateUser()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'agentLoginPage', reducer });
const withSaga = injectSaga({ key: 'agentLoginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AgentLoginPage);
