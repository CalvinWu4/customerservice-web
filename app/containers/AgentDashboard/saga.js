import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_TICKETS } from './constants';
import { getTicketsSucceded, getTicketsFailed } from './actions';

function* getTicketsSaga() {
  try {
    const { data } = yield call(axios.get('http://localhost:8000/api/tickets'));
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
