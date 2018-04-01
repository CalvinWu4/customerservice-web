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

export function authenticateUser(/* userData */) {
  // TODO: call out to HR endpoint and return true/false based on their response
  // Stubbed to always return true for Release 2
  return true;
}

export function registerUser(clientData) {
  return axios.post(`${domain}clients`, clientData);
}

export function requestReplacement(requestData) {
  // TODO: Call out to backend API endpoint and return true/false based on its response
  // Stubbed to always return true for Release 2
  console.log(requestData);
  return true;
}
