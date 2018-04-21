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
import { push } from 'react-router-redux';

import { getTicket, postReturn, putTicket } from 'containers/Application/actions';
import makeSelectApplication from 'containers/Application/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import style from './style';


export class TicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.closingTicket = this.closingTicket.bind(this);
    this.returnProduct = this.returnProduct.bind(this);
  }
  componentDidMount() {
    this.props.getTicket(this.props.match.params.ticketId);
  }
  closingTicket(ticket) {
    this.props.closingTicket(ticket, this.props.match.params.ticketId);
    this.props.goToEdit('/tickets');
  }
  returnProduct(ticket) {
    this.props.returnDevice(ticket, this.props.match.params.ticketId);
    this.props.goToEdit('/tickets');
  }
  render() {
    return (
      <div style={style.ticketView}>
        <Typography variant="body1" align="right" >Logout [email address]</Typography>
        <TicketForm ticket={this.props.application.ticket} redirectToEdit={() => this.props.goToEdit(`/tickets/edit/${this.props.match.params.ticketId}`)} returnProduct={this.returnProduct} closeTicket={this.closingTicket} />
        <Typography variant="headline" style={style.childComponents}>Comments</Typography>
        <StoredCommentForm> </StoredCommentForm>
        <Typography variant="subheading" style={style.childComponents}>Add New Comment</Typography>
        <NewCommentForm ></NewCommentForm>
      </div>
    );
  }
}

TicketPage.propTypes = {
  getTicket: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  goToEdit: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired,
  returnDevice: PropTypes.func.isRequired,
  closingTicket: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  ticketpage: makeSelectTicketPage(),
  application: makeSelectApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTicket: (ticketId) => dispatch(getTicket(ticketId)),
    goToEdit: (path) => dispatch(push(path)),
    returnDevice: (ticket, ticketId) => dispatch(postReturn(ticket, ticketId)),
    closingTicket: (ticket, ticketId) => dispatch(putTicket(ticket, ticketId)),
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
