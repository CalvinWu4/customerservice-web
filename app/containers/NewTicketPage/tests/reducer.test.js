
import { fromJS } from 'immutable';
import newTicketPageReducer from '../reducer';

describe('newTicketPageReducer', () => {
  it('returns the initial state', () => {
    expect(newTicketPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
