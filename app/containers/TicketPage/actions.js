/*
 *
 * TicketPage actions
 *
 */

import { GET_TICKET, GET_TICKET_SUCCESS, GET_TICKET_FAILURE } from './constants';

export function getTicket(ticketId) {
  return {
    type: GET_TICKET,
    ticketId,
  };
}

export function getTicketSuccess(ticket) {
  return {
    type: GET_TICKET_SUCCESS,
    ticket,
  };
}

export function getTicketFailure(error) {
  return {
    type: GET_TICKET_FAILURE,
    error,
  };
}
