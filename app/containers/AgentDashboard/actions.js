/*
 *
 * AgentDashboard actions
 *
 */

import {
  GET_TICKETS, GET_TICKETS_SUCCEDED, GET_TICKETS_FAILED,
} from './constants';

export function getTickets() {
  return {
    type: GET_TICKETS,
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
