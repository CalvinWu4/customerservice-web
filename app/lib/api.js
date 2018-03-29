import axios from 'axios';

export function getMyTickets() {
  return axios.get('https://api-customerservice.azurewebsites.net/api/tickets');
}
