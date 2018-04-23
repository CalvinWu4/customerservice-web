/*
 *
 * TicketPage actions
 *
 */

import { GET_TICKET, GET_TICKET_SUCCEDED, GET_TICKET_FAILED } from './constants';

export function getTicket(ticketId) {
  return {
    type: GET_TICKET,
    ticketId,
  };
}

export function getTicketSucceded(ticket) {
  return {
    type: GET_TICKET_SUCCEDED,
    ticket,
  };
}

export function getTicketFailed(error) {
  return {
    type: GET_TICKET_FAILED,
    error,
  };
}
