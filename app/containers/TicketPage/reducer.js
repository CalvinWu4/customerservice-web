/*
 *
 * TicketPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_REPLACEMENT_SUCCESS,
  GET_TICKET_SUCCESS,
} from './constants';

const initialState = fromJS({
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
});

function ticketPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REPLACEMENT_SUCCESS:
      return state;
    case GET_TICKET_SUCCESS:
      return state.set('ticket', action.ticket);
    default:
      return state;
  }
}

export default ticketPageReducer;
