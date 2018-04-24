/*
 *
 * MyReviewsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_REVIEWS_SUCCEDED } from './constants';

const initialState = fromJS({
  reviews: [],
});

function myReviewsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS_SUCCEDED:
      return state.set('reviews', fromJS(action.reviews));
    default:
      return state;
  }
}

export default myReviewsPageReducer;
