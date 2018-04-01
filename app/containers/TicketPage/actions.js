/*
 *
 * TicketPage actions
 *
 */

import {
  REQUEST_REPLACEMENT,
  REQUEST_REPLACEMENT_SUCCESS,
  REQUEST_REPLACEMENT_FAILURE,
  GET_TICKET,
  GET_TICKET_SUCCESS,
  GET_TICKET_FAILURE,
} from './constants';

export function requestReplacement(requestData) {
  return {
    type: REQUEST_REPLACEMENT,
    requestData,
  };
}

export function requestReplacementSuccess() {
  return {
    type: REQUEST_REPLACEMENT_SUCCESS,
  };
}

export function requestReplacementFailure() {
  return {
    type: REQUEST_REPLACEMENT_FAILURE,
  };
}

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
