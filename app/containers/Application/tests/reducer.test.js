
import { fromJS } from 'immutable';
import applicationReducer from '../reducer';

describe('applicationReducer', () => {
  it('returns the initial state', () => {
    expect(applicationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
