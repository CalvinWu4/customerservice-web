/*
 *
 * ClientRegistrationPage actions
 *
 */

import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export function registerUser(client) {
  return {
    type: REGISTER,
    client,
  };
}

export function registerUserSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerUserFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}
