/*
 *
 * Application actions
 *
 */


import { GET_TICKET, GET_TICKET_SUCCESS, GET_TICKET_FAILURE, PUT_TICKET, PUT_TICKET_SUCCESS, PUT_TICKET_FAILURE } from './constants';

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

export function putTicket(ticket) {
  return {
    type: PUT_TICKET,
    ticket,
  };
}

export function putTicketSuccess(ticket) {
  return {
    type: PUT_TICKET_SUCCESS,
    ticket,
  };
}

export function putTicketFailure(error) {
  return {
    type: PUT_TICKET_FAILURE,
    error,
  };
}
