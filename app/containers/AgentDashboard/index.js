/**
 *
 * AgentDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import TicketForm from 'components/TicketForm';
import Grid from 'material-ui/Grid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAgentDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getTickets } from './actions';

export class AgentDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      <Grid container alignItems="center" direction="column" justify="center" spacing={16} style={{ height: '100vh' }}>
        <Grid item xs={8}>
          {this.props.agentdashboard.tickets.map((t) => <TicketForm ticket={t} />)}
        </Grid>
      </Grid>
    );
  }
}

AgentDashboard.propTypes = {
  getTickets: PropTypes.func.isRequired,
  agentdashboard: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  agentdashboard: makeSelectAgentDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTickets: () => dispatch(getTickets()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'agentDashboard', reducer });
const withSaga = injectSaga({ key: 'agentDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AgentDashboard);
