/*
 *
 * ClientsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_CLIENTS_SUCCEDED } from './constants';

const initialState = fromJS({
  clients: [],
});

function clientsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS_SUCCEDED:
      return state.set('clients', fromJS(action.clients));
    default:
      return state;
  }
}

export default clientsPageReducer;
