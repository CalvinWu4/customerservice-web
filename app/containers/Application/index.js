/**
 *
 * Application
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectApplication from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Application extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Application.propTypes = {
  children: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'application', reducer });
const withSaga = injectSaga({ key: 'application', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Application);
