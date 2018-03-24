import { createSelector } from 'reselect';

/**
 * Direct selector to the clientRegistrationPage state domain
 */
const selectClientRegistrationPageDomain = (state) => state.get('clientRegistrationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClientRegistrationPage
 */

const makeSelectClientRegistrationPage = () => createSelector(
  selectClientRegistrationPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectClientRegistrationPage;
export {
  selectClientRegistrationPageDomain,
};
