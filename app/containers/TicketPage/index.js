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
import NewCommentForm from 'components/NewCommentForm';
import TicketForm from 'components/TicketForm';
import StoredCommentForm from 'components/StoredCommentForm';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import style from './style';
import { getTicket } from './actions';

export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div style={style.ticketView}>
        <Typography variant="body1" align="right" >Logout [email address]</Typography>
        <TicketForm ticket={this.props.ticketpage.ticket}></TicketForm>
        <Typography variant="headline" style={style.childComponents}>Comments</Typography>
        <StoredCommentForm> </StoredCommentForm>
        <Typography variant="subheading" style={style.childComponents}>Add New Comment</Typography>
        <NewCommentForm ></NewCommentForm>
      </div>
    );
  }
}

TicketPage.propTypes = {
  ticketpage: PropTypes.object.isRequired,
  getTicket: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTicket: (ticketId) => dispatch(getTicket(ticketId)),
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
