import axios from 'axios';

const domain = 'https://api-customerservice.azurewebsites.net/api/';

export function getMyTickets() {
  return axios.get(`${domain}tickets`);
}

export function getTicket(id) {
  return axios.get(`${domain}tickets/${id}`);
}

export function addTicket(ticketData) {
  return axios.post(`${domain}tickets`, ticketData);
}

export function authenticateUser(userData) {
  // TODO: call out to HR
  return userData;
}
