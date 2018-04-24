/*
 *
 * Application reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CLIENTS_SUCCEDED, POST_LOGIN_SUCCEDED, GET_CLIENT_SUCCEDED,
} from './constants';

const initialState = fromJS({
  clients: [],
  token: '',
  accountType: 'employee',
  account: {
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
    case GET_CLIENT_SUCCEDED:
      return state.set('client', fromJS(action.client));
    case POST_LOGIN_SUCCEDED:
      return state.set('token', fromJS(action.result.token)).set('account', fromJS(action.result.account)).set('accountType', fromJS(action.result.accountType));
    default:
      return state;
  }
}

export default applicationReducer;
