/**
 *
 * EditTicketPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import EditTicketForm from '../../components/EditTicketForm';

import makeSelectEditTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';


export class EditTicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        { /* onClick={this.props.putTicket} */}
        <EditTicketForm ticket={this.props.editticketpage.ticket} />
      </div>
    );
  }
}

EditTicketPage.propTypes = {
  editticketpage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  editticketpage: makeSelectEditTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editTicketPage', reducer });
const withSaga = injectSaga({ key: 'editTicketPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditTicketPage);
