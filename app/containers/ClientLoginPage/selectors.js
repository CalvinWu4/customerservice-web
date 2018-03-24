import { createSelector } from 'reselect';

/**
 * Direct selector to the clientLoginPage state domain
 */
const selectClientLoginPageDomain = (state) => state.get('clientLoginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClientLoginPage
 */

const makeSelectClientLoginPage = () => createSelector(
  selectClientLoginPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectClientLoginPage;
export {
  selectClientLoginPageDomain,
};
