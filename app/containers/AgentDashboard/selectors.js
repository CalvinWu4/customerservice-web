import { createSelector } from 'reselect';

/**
 * Direct selector to the agentDashboard state domain
 */
const selectAgentDashboardDomain = (state) => state.get('agentDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgentDashboard
 */

const makeSelectAgentDashboard = () => createSelector(
  selectAgentDashboardDomain,
  (substate) => substate.toJS()
);

export default makeSelectAgentDashboard;
export {
  selectAgentDashboardDomain,
};
