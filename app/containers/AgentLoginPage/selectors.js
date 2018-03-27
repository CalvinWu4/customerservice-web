import { createSelector } from 'reselect';

/**
 * Direct selector to the agentLoginPage state domain
 */
const selectAgentLoginPageDomain = (state) => state.get('agentLoginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgentLoginPage
 */

const makeSelectAgentLoginPage = () => createSelector(
  selectAgentLoginPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAgentLoginPage;
export {
  selectAgentLoginPageDomain,
};
