
import { fromJS } from 'immutable';
import clientRegistrationPageReducer from '../reducer';

describe('clientRegistrationPageReducer', () => {
  it('returns the initial state', () => {
    expect(clientRegistrationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
