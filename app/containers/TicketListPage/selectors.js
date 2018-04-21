import { createSelector } from 'reselect';

/**
 * Direct selector to the ticketListPage state domain
 */
const selectTicketListPageDomain = (state) => state.get('ticketListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TicketListPage
 */

const makeSelectTicketListPage = () => createSelector(
  selectTicketListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectTicketListPage;
export {
  selectTicketListPageDomain,
};
