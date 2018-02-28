import { createSelector } from 'reselect';

/**
 * Direct selector to the customerValidationPage state domain
 */
const selectCustomerValidationPageDomain = (state) => state.get('customerValidationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CustomerValidationPage
 */

const makeSelectCustomerValidationPage = () => createSelector(
  selectCustomerValidationPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCustomerValidationPage;
export {
  selectCustomerValidationPageDomain,
};
