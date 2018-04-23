import axios from 'axios';

export const ROOT_URI = 'https://api-customerservice.azurewebsites.net/api';

function getAccountQueryName(accountId, accountType) {
  const name = accountType === 'customer' ? 'clientId' : 'agentId';
  return `${name}=${accountId}`;
}

export function getTicketListAPI(accountId, accountType) {
  return axios.get(`${ROOT_URI}/tickets?${getAccountQueryName(accountId, accountType)}}`);
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

export function postTicketAPI(ticket, accountId, accountType) {
  return axios.post(`${ROOT_URI}/tickets?${getAccountQueryName(accountId, accountType)}`, ticket, { headers: { 'Content-Type': 'application/json' } });
}

export function putTicketAPI(ticket, ticketId) {
  return axios.put(`${ROOT_URI}/tickets/${ticketId}`, ticket, { headers: { 'Content-Type': 'application/json' } });
}

export function getTicketAPI(ticketId) {
  return axios.get(`${ROOT_URI}/tickets/${ticketId}`);
}

export function postCommentAPI(comment, accountId, accountType) {
  return axios.post(`${ROOT_URI}/comments?${getAccountQueryName(accountId, accountType)}`, comment, { headers: { 'Content-Type': 'application/json' } });
}

export function postReviewAPI(review, clientId) {
  return axios.post(`${ROOT_URI}/reviews?clientId=${clientId}`, review, { headers: { 'Content-Type': 'application/json' } });
}
