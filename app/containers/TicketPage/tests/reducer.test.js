
import { fromJS } from 'immutable';
import ticketPageReducer from '../reducer';

describe('ticketPageReducer', () => {
  it('returns the initial state', () => {
    expect(ticketPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
