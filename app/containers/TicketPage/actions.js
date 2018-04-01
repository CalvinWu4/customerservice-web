/*
 *
 * TicketPage actions
 *
 */

import {
  REQUEST_REPLACEMENT,
  REQUEST_REPLACEMENT_SUCCESS,
  REQUEST_REPLACEMENT_FAILURE,
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
