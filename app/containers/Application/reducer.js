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
    title: '',
    description: '',
    status: '',
    opened: '',
    closed: '',
    priority: '',
    agentId: '',
    productSerialNo: '',
    client: {
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
      },
    },
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
  agent: {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    regionName: '',
    roleName: '',
    departmentName: '',
    positionName: '',
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
