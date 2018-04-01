/*
 *
 * TicketPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_REPLACEMENT_SUCCESS,
} from './constants';

const initialState = fromJS({});

function ticketPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REPLACEMENT_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default ticketPageReducer;
