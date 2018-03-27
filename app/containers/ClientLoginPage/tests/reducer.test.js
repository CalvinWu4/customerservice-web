
import { fromJS } from 'immutable';
import clientLoginPageReducer from '../reducer';

describe('clientLoginPageReducer', () => {
  it('returns the initial state', () => {
    expect(clientLoginPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
