
import { fromJS } from 'immutable';
import agentLoginPageReducer from '../reducer';

describe('agentLoginPageReducer', () => {
  it('returns the initial state', () => {
    expect(agentLoginPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
