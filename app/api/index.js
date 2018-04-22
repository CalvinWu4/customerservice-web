import axios from 'axios';

export const ROOT_URI = 'https://api-customerservice.azurewebsites.net/api';

export function getTicketListAPI() {
  return axios.get(`${ROOT_URI}/tickets`);
}

export function getClientsAPI() {
  return axios.get(`${ROOT_URI}/clients`);
}

export function postLoginAPI(email, password) {
  return axios.post('https://api-gateway-343.herokuapp.com/auth/login', { username: email, password }, { headers: { 'Content-Type': 'application/json' } });
}
