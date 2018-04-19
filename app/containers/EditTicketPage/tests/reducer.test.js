
import { fromJS } from 'immutable';
import editTicketPageReducer from '../reducer';

describe('editTicketPageReducer', () => {
  it('returns the initial state', () => {
    expect(editTicketPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
