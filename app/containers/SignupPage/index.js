/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import SignupContentWrapper from 'components/SignupContentWrapper';
import SignupForm from 'components/SignupForm';

import { Grid } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { postClient } from './actions';

export class SignupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SignupContentWrapper goHome={() => this.props.redirectTo('/')} goLogin={() => this.props.redirectTo('/login')}>
        <Grid centered>
          <Grid.Row>
            <SignupForm onSignup={this.props.postClient} />
          </Grid.Row>
        </Grid>
      </SignupContentWrapper>
    );
  }
}

SignupPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
  postClient: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    postClient: (url) => dispatch(postClient(url)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signupPage', reducer });
const withSaga = injectSaga({ key: 'signupPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
