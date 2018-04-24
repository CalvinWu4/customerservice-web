
import { fromJS } from 'immutable';
import myReviewsPageReducer from '../reducer';

describe('myReviewsPageReducer', () => {
  it('returns the initial state', () => {
    expect(myReviewsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
