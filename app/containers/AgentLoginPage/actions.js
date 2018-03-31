/*
 *
 * AgentLoginPage actions
 *
 */

import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from './constants';

export function authenticateUser() {
  return {
    type: AUTHENTICATE_USER,
  };
}

export function authenticateUserSuccess() {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
  };
}

export function authenticateUserFailure() {
  return {
    type: AUTHENTICATE_USER_FAILURE,
  };
}
