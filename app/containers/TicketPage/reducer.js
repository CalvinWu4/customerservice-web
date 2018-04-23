/*
 *
 * TicketPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_TICKET_SUCCEDED,
} from './constants';

const initialState = fromJS({
  ticket: {
    id: '',
    title: '',
    description: '',
    status: '',
    productSerialNumber: '',
    agentId: '',
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
        zipcode: '',
        country: '',
      },
    },
  },
});

function ticketPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKET_SUCCEDED:
      return state.set('ticket', fromJS(action.ticket));
    default:
      return state;
  }
}

export default ticketPageReducer;
