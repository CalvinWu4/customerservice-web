
import { fromJS } from 'immutable';
import customerValidationPageReducer from '../reducer';

describe('customerValidationPageReducer', () => {
  it('returns the initial state', () => {
    expect(customerValidationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
