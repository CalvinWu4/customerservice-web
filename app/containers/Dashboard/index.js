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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Issue</TableCell>
                <TableCell>Device Model</TableCell>
                <TableCell>Date Opened</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.dashboard.tickets.map(t =>{
                return (
                  <TableRow key={t.id}>
                    <TableCell>{t.title}</TableCell>
                    <TableCell>{t.device.model}</TableCell>
                    <TableCell>{t.openDate}</TableCell>
                    <TableCell>{t.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
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
