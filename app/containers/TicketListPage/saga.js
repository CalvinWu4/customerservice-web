import { getMyTickets } from 'lib/api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_MY_TICKETS } from './constants';
import { getMyTicketsFailure, getMyTicketsSuccess } from './actions';

function* getMyTicketsSaga() {
  try {
    const { data } = yield call(getMyTickets);
    yield put(getMyTicketsSuccess(data));
  } catch (e) {
    yield put(getMyTicketsFailure(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(GET_MY_TICKETS, getMyTicketsSaga),
  ];
}
