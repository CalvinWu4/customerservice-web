/*
 *
 * TicketPage actions
 *
 */

import { GET_TICKET, GET_TICKET_SUCCEDED, GET_TICKET_FAILED, PUT_TICKET, PUT_TICKET_SUCCEDED, PUT_TICKET_FAILED, POST_COMMENT, POST_COMMENT_SUCCEDED, POST_COMMENT_FAILED } from './constants';

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


export function putTicket(ticket, ticketId) {
  return {
    type: PUT_TICKET,
    ticketId,
    ticket,
  };
}

export function putTicketSucceded() {
  return {
    type: PUT_TICKET_SUCCEDED,
  };
}

export function putTicketFailed(error) {
  return {
    type: PUT_TICKET_FAILED,
    error,
  };
}

export function postComment(comment, accountId, accountType) {
  return {
    type: POST_COMMENT,
    comment,
    accountId,
    accountType,
  };
}

export function postCommentSucceded(comment) {
  return {
    type: POST_COMMENT_SUCCEDED,
    comment,
  };
}

export function postCommentFailed(error) {
  return {
    type: POST_COMMENT_FAILED,
    error,
  };
}
