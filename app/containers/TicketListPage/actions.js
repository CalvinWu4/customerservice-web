/*
 *
 * TicketListPage actions
 *
 */

import {
  GET_MY_TICKETS,
  GET_MY_TICKETS_SUCCESS,
  GET_MY_TICKETS_FAILURE,
} from './constants';

export function getMyTickets() {
  return {
    type: GET_MY_TICKETS,
  };
}

export function getMyTicketsSuccess(tickets) {
  return {
    type: GET_MY_TICKETS_SUCCESS,
    tickets,
  };
}

export function getMyTicketsFailure(error) {
  return {
    type: GET_MY_TICKETS_FAILURE,
    error,
  };
}
