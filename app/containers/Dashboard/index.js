/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ClientTicketTable from 'components/ClientTicketTable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTickets } from './actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.getTickets();
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Grid container alignItems="center" direction="row" justify="center" spacing={16} style={{ height: '100vh' }}>
          <Grid item xs={6}>
            <Typography variant="headline" color="primary" align="center">My Tickets</Typography>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              {/* TODO: Select Agent/Client Ticket Table based on user's class in JWT */}
              <ClientTicketTable tickets={this.props.dashboard.tickets} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getTickets: PropTypes.func.isRequired,
  dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTickets: () => dispatch(getTickets()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
