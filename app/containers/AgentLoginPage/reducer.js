/*
 *
 * AgentLoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTHENTICATE_USER_SUCCESS,
} from './constants';

const initialState = fromJS({});

function agentLoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default agentLoginPageReducer;
