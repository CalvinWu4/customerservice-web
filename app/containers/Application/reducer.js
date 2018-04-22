/*
 *
 * Application reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CLIENTS_SUCCEDED, POST_LOGIN_SUCCEDED,
} from './constants';

const initialState = fromJS({
  clients: [],
  token: '',
  client: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    },
  },
});

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS_SUCCEDED:
      return state.set('clients', fromJS(action.clients));
    case POST_LOGIN_SUCCEDED:
      return state.set('token', fromJS(action.result.token));
    default:
      return state;
  }
}

export default applicationReducer;
