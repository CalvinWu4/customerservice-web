/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_TICKETS_SUCCEDED } from './constants';

const initialState = fromJS({
  tickets: [{ key: '1', title: 'Device On Fire', device: { model: 'Fireproof Watch' }, openDate: '3/2/18', status: 'Hot' }],
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS_SUCCEDED:
      return state.set('tickets', fromJS(action.tickets));
    default:
      return state;
  }
}

export default dashboardReducer;
