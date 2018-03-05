/*
 *
 * TicketPage actions
 *
 */

import {
   POST_TICKET, POST_TICKET_SUCCESS, POST_TICKET_FAIL,
} from './constants';


export function postTicket(ticket) {
  return {
    type: POST_TICKET,
    ticket,
  };
}
export function postTicketSuccess(ticket) {
  return {
    type: POST_TICKET_SUCCESS,
    ticket,
  };
}

export function postTicketFailure(error) {
  return {
    type: POST_TICKET_FAIL,
    error,
  };
}

