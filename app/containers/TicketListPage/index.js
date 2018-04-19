/**
 *
 * TicketListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import ClientTicketTable from 'components/ClientTicketTable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getMyTickets } from './actions';

export class TicketListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.onClickRow = this.onClickRow.bind(this);
  }

  componentDidMount() {
    this.props.getMyTickets();
  }

  onClickRow(id) {
    this.props.redirectTo(`/tickets/${id}`);
  }

  render() {
    return (
      <Grid container alignItems="center" direction="row" justify="center" spacing={16} style={{ height: '75vh' }}>
        <Grid item xs={6}>
          <Typography variant="headline" color="primary" align="center">My Tickets</Typography>
        </Grid>
        <Grid container justify="center">
          <Button variant="raised" color="primary" align="center" onClick={() => this.props.redirectTo('/ticket/create')}>Create a New Ticket</Button>
        </Grid>
        <Grid item xs={8}>
          <Paper>
            {/* TODO: Select Agent/Client Ticket Table based on user's class in JWT */}
            <ClientTicketTable tickets={this.props.ticketlistpage.tickets} onClickRow={this.onClickRow} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

TicketListPage.propTypes = {
  ticketlistpage: PropTypes.object.isRequired,
  getMyTickets: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketlistpage: makeSelectTicketListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMyTickets: () => dispatch(getMyTickets()),
    redirectTo: (url) => dispatch(push(url)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticketListPage', reducer });
const withSaga = injectSaga({ key: 'ticketListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TicketListPage);
