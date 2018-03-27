/*
 *
 * TicketListPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  tickets: [{ id: '1', title: 'Device On Fire', device: { model: 'Fireproof Watch' }, openDate: '3/2/18', status: 'Hot' }],
});

function ticketListPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default ticketListPageReducer;
