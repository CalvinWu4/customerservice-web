
import { fromJS } from 'immutable';
import ticketListPageReducer from '../reducer';

describe('ticketListPageReducer', () => {
  it('returns the initial state', () => {
    expect(ticketListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
