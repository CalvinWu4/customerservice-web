/*
 *
 * Application actions
 *
 */

import {
  GET_CLIENTS,
  GET_CLIENTS_SUCCEDED,
  GET_CLIENTS_FAILED,
  POST_LOGIN,
  POST_LOGIN_SUCCEDED,
  POST_LOGIN_FAILED,
  GET_CLIENT,
  GET_CLIENT_FAILED,
  GET_CLIENT_SUCCEDED,
} from './constants';

export function getClients() {
  return {
    type: GET_CLIENTS,
  };
}

export function getClientsSucceded(clients) {
  return {
    type: GET_CLIENTS_SUCCEDED,
    clients,
  };
}

export function getClientsFailed(error) {
  return {
    type: GET_CLIENTS_FAILED,
    error,
  };
}

export function getClient(clientId) {
  return {
    type: GET_CLIENT,
    clientId,
  };
}

export function getClientSucceded(client) {
  return {
    type: GET_CLIENT_SUCCEDED,
    client,
  };
}

export function getClientFailed(error) {
  return {
    type: GET_CLIENT_FAILED,
    error,
  };
}

export function postLogin(email, password) {
  return {
    type: POST_LOGIN,
    email,
    password,
  };
}

export function postLoginSucceded(result) {
  return {
    type: POST_LOGIN_SUCCEDED,
    result,
  };
}

export function postLoginFailed(error) {
  return {
    type: POST_LOGIN_FAILED,
    error,
  };
}
