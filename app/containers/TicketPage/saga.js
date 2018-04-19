import { takeLatest, call, put } from 'redux-saga/effects';
import { getTicket } from 'lib/api';
import { GET_TICKET } from './constants';
import { getTicketFailure, getTicketSuccess } from './actions';

function* getTicketSaga(action) {
  try {
    const { data } = yield call(getTicket, action.ticketId);
    yield put(getTicketSuccess(data));
  } catch (e) {
    yield put(getTicketFailure(e));
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKET, getTicketSaga),
  ];
}
