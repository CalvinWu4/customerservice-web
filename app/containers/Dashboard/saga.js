import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_TICKETS } from './constants';
import { getTicketsSucceded, getTicketsFailed } from './actions';

function getTicketsServerRequest() {
  return axios.get('http://api-customerservice.azurewebsites.net/api/tickets');
}

function* getTicketsSaga() {
  try {
    const { data } = yield call(getTicketsServerRequest);
    yield put(getTicketsSucceded(data));
  } catch (e) {
    yield put(getTicketsFailed(e));
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(GET_TICKETS, getTicketsSaga),
  ];
}
