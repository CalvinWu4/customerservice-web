/*
 *
 * NewTicketPage actions
 *
 */

import {
  DEFAULT_ACTION, CREATE_TICKET, CREATE_TICKET_SUCCESS, CREATE_TICKET_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createTicket(ticket, clientId) {
  return {
    type: CREATE_TICKET,
    ticket,
    clientId,
  };
}
export function createTicketSuccess(ticket) {
  return {
    type: CREATE_TICKET_SUCCESS,
    ticket,
  };
}
export function createTicketFailure(e) {
  return {
    type: CREATE_TICKET_FAILURE,
    e,
  };
}
