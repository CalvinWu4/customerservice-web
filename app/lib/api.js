import axios from 'axios';

const domain = 'https://api-customerservice.azurewebsites.net/api/';

export function getMyTickets() {
  return axios.get(`${domain}tickets`);
}

export function getTicketapi(id) {
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


export function createTicket(ticket, clientId) {
  return axios.post(`${domain}tickets?clientId=${clientId}`, ticket);
}

export function registerUser(clientData) {
  return axios.post(`${domain}clients`, clientData);
}

export function putTicketapi(ticket, ticketId) {
  return axios.put(`${domain}tickets/${ticketId}`, ticket);
}
