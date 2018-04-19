/*
 *
 * ClientRegistrationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER_SUCCESS,
} from './constants';

const initialState = fromJS({});

function clientRegistrationPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default clientRegistrationPageReducer;
