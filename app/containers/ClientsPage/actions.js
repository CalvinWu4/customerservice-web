/*
 *
 * ClientsPage actions
 *
 */

import { GET_CLIENTS, GET_CLIENTS_SUCCEDED, GET_CLIENTS_FAILED } from './constants';

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
