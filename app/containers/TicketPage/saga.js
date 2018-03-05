import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { POST_TICKET } from './constants';
import { postTicketFailure, postTicketSuccess } from './actions';

function postTicketServerRequest(ticket) {
  console.log(ticket);
  return axios.post('http://api-customerservice.azurewebsites.net/api/tickets', ticket);
}

function* postTicketSaga(action) {
  try {
    const { data } = yield call(postTicketServerRequest, action.ticket);
    yield put(postTicketSuccess(data));
  } catch (e) {
    yield put(postTicketFailure(e));
  }
}

// Individual exports for testing
export default function* rootSaga() {
  yield [
    takeLatest(POST_TICKET, postTicketSaga),
  ];
}
