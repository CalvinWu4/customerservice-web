import axios from 'axios';

export const ROOT_URI = 'https://api-customerservice.azurewebsites.net/api';

export function getTicketListAPI(accountId, accountType) {
  const name = accountType === 'customer' ? 'clientId' : 'agentId';
  return axios.get(`${ROOT_URI}/tickets?${name}=${accountId}`);
}

export function getClientsAPI() {
  return axios.get(`${ROOT_URI}/clients`);
}

export function getClientAPI(clientId) {
  return axios.get(`${ROOT_URI}/clients/${clientId}`);
}

export function postLoginAPI(email, password) {
  return axios.post('https://api-gateway-343.herokuapp.com/auth/login', { username: email, password }, { headers: { 'Content-Type': 'application/json' } });
}

export function postClientAPI(client) {
  return axios.post(`${ROOT_URI}/clients`, client, { headers: { 'Content-Type': 'application/json' } });
}
