/**
 *
 * TicketPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Typography from 'material-ui/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import NewCommentForm from '../../components/NewCommentForm';
/* import TicketForm from '../../components/TicketForm';
  import StoredCommentForm from '../../components/StoredCommentForm';
  */


export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Typography varaint="body1" align="right">Logout [email address]</Typography>
        <Typography variant="headline" >Ticket</Typography>
        {/* Insert TicketForm Component here */}
        {/* <TicketForm></TicketForm> */}
        <Typography variant="headline" >Comments</Typography>
        {/* Insert StoredCommentForm Component here */}
        {/* <StoredCommentForm></StoredCommentForm> */}
        <Typography variant="subheading" >Add New Comment</Typography>
        {/* Insert NewCommentForm Component here */}
        <NewCommentForm></NewCommentForm>
      </div>
    );
  }
}

TicketPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticketPage', reducer });
const withSaga = injectSaga({ key: 'ticketPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TicketPage);
