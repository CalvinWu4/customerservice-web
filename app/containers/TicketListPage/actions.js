/*
 *
 * TicketListPage actions
 *
 */

import {
  GET_TICKETS,
  GET_TICKETS_SUCCEDED,
  GET_TICKETS_FAILED,
  POST_TICKET,
  POST_TICKET_SUCCEDED,
  POST_TICKET_FAILED,
} from './constants';

export function getTickets(accountId, accountType) {
  return {
    type: GET_TICKETS,
    accountId,
    accountType,
  };
}

export function getTicketsSucceded(tickets) {
  return {
    type: GET_TICKETS_SUCCEDED,
    tickets,
  };
}

export function getTicketsFailed(error) {
  return {
    type: GET_TICKETS_FAILED,
    error,
  };
}

export function postTicket(ticket, accountId, accountType) {
  return {
    type: POST_TICKET,
    ticket,
    accountId,
    accountType,
  };
}

export function postTicketSucceeded(ticket) {
  return {
    type: POST_TICKET_SUCCEDED,
    ticket,
  };
}

export function postTicketFailed(error) {
  return {
    type: POST_TICKET_FAILED,
    error,
  };
}
