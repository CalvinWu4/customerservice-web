/**
 *
 * NewTicketPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNewTicketPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createTicket } from './actions';

import NewTicketForm from '../../components/NewTicketForm';

const divStyle = {
  width: '80%',
  marginRight: '10%',
  marginLeft: '10%',
  marginTop: '10%',
};
const titleStyle = {
  paddingBottom: 30,
  paddingLeft: '45%',
  paddingRight: '45%',
};

export class NewTicketPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onCreateTicket = this.onCreateTicket.bind(this);
  }
  onCreateTicket(ticket) {
    this.props.createTicket(ticket, 2);
  }
  render() {
    return (
      <div style={divStyle}>
        <Button variant="raised" color="primary" onClick={() => this.props.redirectTo('/tickets')}>Tickets</Button>
        <Typography variant="title" component="h2" style={titleStyle}>Create Ticket</Typography>
        <NewTicketForm onCreateTicket={this.onCreateTicket} />
      </div>
    );
  }
}

NewTicketPage.propTypes = {
  createTicket: PropTypes.func.isRequired,
  redirectTo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newticketpage: makeSelectNewTicketPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    createTicket: (ticket, clientId) => dispatch(createTicket(ticket, clientId)),
    redirectTo: (path) => dispatch(push(path)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newTicketPage', reducer });
const withSaga = injectSaga({ key: 'newTicketPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewTicketPage);
