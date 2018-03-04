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

import CenterGrid from 'components/CenterGrid';

import { push } from 'react-router-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCustomerValidationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CustomerValidationForm from '../../components/CustomerValidationForm/Loadable';

export class CustomerValidationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CenterGrid>
        <CustomerValidationForm onValidate={() => this.props.redirectTo('/ticket')} />
      </CenterGrid>
    );
  }
}

CustomerValidationPage.propTypes = {
  redirectTo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customervalidationpage: makeSelectCustomerValidationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
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
