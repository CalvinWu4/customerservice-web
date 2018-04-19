/*
 *
 * Application reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_TICKET_SUCCESS,
} from './constants';

const initialState = fromJS({
  token: '',
  ticket: {
    id: '',
    status: '',
    agentId: '',
    deviceId: '',
    title: '',
    description: '',
    opened: '',
    closed: '',
  },
  account: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
  },
});

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKET_SUCCESS:
      return state.set('ticket', action.ticket);
    default:
      return state;
  }
}

export default applicationReducer;
