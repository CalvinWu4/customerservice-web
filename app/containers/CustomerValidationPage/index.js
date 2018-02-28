/**
 *
 * CustomerValidationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCustomerValidationPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class CustomerValidationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

CustomerValidationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customervalidationpage: makeSelectCustomerValidationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'customerValidationPage', reducer });
const withSaga = injectSaga({ key: 'customerValidationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CustomerValidationPage);
