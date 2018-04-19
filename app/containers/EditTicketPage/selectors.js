import { createSelector } from 'reselect';

/**
 * Direct selector to the editTicketPage state domain
 */
const selectEditTicketPageDomain = (state) => state.get('editTicketPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditTicketPage
 */

const makeSelectEditTicketPage = () => createSelector(
  selectEditTicketPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectEditTicketPage;
export {
  selectEditTicketPageDomain,
};
