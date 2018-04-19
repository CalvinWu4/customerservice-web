
import { fromJS } from 'immutable';
import ReviewPageReducer from '../reducer';

describe('ReviewPageReducer', () => {
  it('returns the initial state', () => {
    expect(ReviewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
