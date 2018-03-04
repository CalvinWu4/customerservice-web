
import { fromJS } from 'immutable';
import agentDashboardReducer from '../reducer';

describe('agentDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(agentDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
