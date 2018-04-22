/*
 *
 * SignupPage actions
 *
 */

import { POST_CLIENT, POST_CLIENT_SUCCEDED, POST_CLIENT_FAILED } from './constants';

export function postClient(client) {
  return {
    type: POST_CLIENT,
    client,
  };
}

export function postClientSucceded(client) {
  return {
    type: POST_CLIENT_SUCCEDED,
    client,
  };
}

export function postClientFailed(error) {
  return {
    type: POST_CLIENT_FAILED,
    error,
  };
}
