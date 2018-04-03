import axios from 'axios';

// const domain = 'https://api-customerservice.azurewebsites.net/api/';
const domain = 'http://localhost:9000/api/';

export function getMyTickets() {
  return axios.get(`${domain}tickets`);
}

export function getTicket(id) {
  return axios.get(`${domain}tickets/${id}`);
}

export function addTicket(ticketData) {
  return axios.post(`${domain}tickets`, ticketData);
}

export function authenticateUser(/* userData */) {
  // TODO: call out to HR endpoint and return true/false
  // Stubbed to always return true for Release 2
  return true;
}

export function registerUser(clientData) {
  return axios.post(`${domain}clients`, clientData);
}
