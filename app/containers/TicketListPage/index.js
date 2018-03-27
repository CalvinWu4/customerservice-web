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

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ClientTicketTable from 'components/ClientTicketTable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTicketListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TicketListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid container alignItems="center" direction="row" justify="center" spacing={16} style={{ height: '100vh' }}>
        <Grid item xs={6}>
          <Typography variant="headline" color="primary" align="center">My Tickets</Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper>
            {/* TODO: Select Agent/Client Ticket Table based on user's class in JWT */}
            <ClientTicketTable tickets={this.props.ticketlistpage.tickets} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

TicketListPage.propTypes = {
  ticketlistpage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ticketlistpage: makeSelectTicketListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
