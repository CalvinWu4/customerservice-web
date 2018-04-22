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
import { push } from 'react-router-redux';
import EditTicketForm from '../../components/EditTicketForm';

import makeSelectEditTicketPage from './selectors';
import makeSelectApplication from './../Application/selectors';

import reducer from './reducer';
import saga from './saga';
import { putTicket, getAgents } from './../Application/actions';

export class EditTicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.updateTicket = this.updateTicket.bind(this);
  }
  componentDidMount() {
    this.props.getAgents();
  }
  updateTicket(ticket) {
    this.props.putTicket(ticket, this.props.match.params.ticketId);
    this.props.redirectTo(`/tickets/${this.props.match.params.ticketId}`);
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        { /* onClick={this.props.putTicket} */}
        <EditTicketForm ticket={this.props.application.ticket} agents={this.props.application.agents} onUpdate={this.updateTicket} />
      </div>
    );
  }
}

EditTicketPage.propTypes = {
  application: PropTypes.object,
  redirectTo: PropTypes.func,
  match: PropTypes.object,
  putTicket: PropTypes.func,
  getAgents: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  editticketpage: makeSelectEditTicketPage(),
  application: makeSelectApplication(),

});

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: (url) => dispatch(push(url)),
    putTicket: (ticket, id) => dispatch(putTicket(ticket, id)),
    getAgents: () => dispatch(getAgents()),
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
