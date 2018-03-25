/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
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
    this.props.getTickets();
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Paper>
          // TODO: Select Agent/Client Ticket Table based on user's class in JWT
          <ClientTicketTable tickets={this.tickets}/>
        </Paper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getTickets: PropTypes.func.isRequired,
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
