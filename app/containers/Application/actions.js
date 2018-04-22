/*
 *
 * Application actions
 *
 */


import { GET_TICKET, GET_TICKET_SUCCESS, GET_TICKET_FAILURE, PUT_TICKET, PUT_TICKET_SUCCESS, PUT_TICKET_FAILURE, POST_RETURN, POST_RETURN_SUCCESS, POST_RETURN_FAILURE, GET_AGENTS, GET_AGENTS_SUCCESS, GET_AGENTS_FAILURE } from './constants';

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

export function putTicket(ticket, ticketId) {
  return {
    type: PUT_TICKET,
    ticket,
    ticketId,
  };
}

export function putTicketSuccess() {
  return {
    type: PUT_TICKET_SUCCESS,
  };
}

export function putTicketFailure(error) {
  return {
    type: PUT_TICKET_FAILURE,
    error,
  };
}

export function postReturn(ticket, ticketId) {
  return {
    type: POST_RETURN,
    ticket,
    ticketId,
  };
}

export function postReturnSuccess() {
  return {
    type: POST_RETURN_SUCCESS,
  };
}

export function postReturnFailure(error) {
  return {
    type: POST_RETURN_FAILURE,
    error,
  };
}

export function getAgents() {
  return {
    type: GET_AGENTS,
  };
}

export function getAgentsSuccess(agents) {
  return {
    type: GET_AGENTS_SUCCESS,
    agents,
  };
}
export function getAgentsFailure(error) {
  return {
    type: GET_AGENTS_FAILURE,
    error,
  };
}

