import { createSelector } from 'reselect';

/**
 * Direct selector to the myReviewsPage state domain
 */
const selectMyReviewsPageDomain = (state) => state.get('myReviewsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyReviewsPage
 */

const makeSelectMyReviewsPage = () => createSelector(
  selectMyReviewsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyReviewsPage;
export {
  selectMyReviewsPageDomain,
};
