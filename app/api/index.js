import axios from 'axios';

export const ROOT_URI = 'https://api-customerservice.azurewebsites.net/api';

export function getTicketList() {
  return axios.get(`${ROOT_URI}/tickets`);
}
