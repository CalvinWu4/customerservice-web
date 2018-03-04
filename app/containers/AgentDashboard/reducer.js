/*
 *
 * AgentDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_TICKETS_SUCCEDED } from './constants';

const initialState = fromJS({
  tickets: [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    description: 'My phone broke',
    address: {
      line1: '59 pakrpoint',
      line2: 'APT 2',
      city: 'rochester',
      state: 'ny',
      country: 'usa',
      zipcode: '02151',
    },
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    description: 'My phone broke',
    address: {
      line1: '59 pakrpoint',
      line2: 'APT 2',
      city: 'rochester',
      state: 'ny',
      country: 'usa',
      zipcode: '02151',
    },
  }],
});

function agentDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS_SUCCEDED:
      return state.set('tickets', fromJS(action.tickets));
    default:
      return state;
  }
}

export default agentDashboardReducer;
