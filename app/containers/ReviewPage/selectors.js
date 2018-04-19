import { createSelector } from 'reselect';

/**
 * Direct selector to the ReviewPage state domain
 */
const selectReviewPageDomain = (state) => state.get('ReviewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReviewPage
 */

const makeSelectReviewPage = () => createSelector(
  selectReviewPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectReviewPage;
export {
  selectReviewPageDomain,
};
