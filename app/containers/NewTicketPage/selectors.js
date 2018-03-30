import { createSelector } from 'reselect';

/**
 * Direct selector to the newTicketPage state domain
 */
const selectNewTicketPageDomain = (state) => state.get('newTicketPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewTicketPage
 */

const makeSelectNewTicketPage = () => createSelector(
  selectNewTicketPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNewTicketPage;
export {
  selectNewTicketPageDomain,
};
