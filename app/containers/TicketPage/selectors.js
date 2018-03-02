import { createSelector } from 'reselect';

/**
 * Direct selector to the ticketPage state domain
 */
const selectTicketPageDomain = (state) => state.get('ticketPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TicketPage
 */

const makeSelectTicketPage = () => createSelector(
  selectTicketPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectTicketPage;
export {
  selectTicketPageDomain,
};
