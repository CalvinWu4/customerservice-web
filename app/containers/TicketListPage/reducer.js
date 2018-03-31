/*
 *
 * TicketListPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_MY_TICKETS_SUCCESS,
} from './constants';

const initialState = fromJS({
  tickets: [{ id: '1', title: 'Device On Fire', device: { model: 'Fireproof Watch' }, openDate: '3/2/18', status: 'Hot' }],
});

function ticketListPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_TICKETS_SUCCESS:
      return state.set('tickets', action.tickets);
    default:
      return state;
  }
}

export default ticketListPageReducer;
