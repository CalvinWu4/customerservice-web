import { takeLatest, call, put } from 'redux-saga/effects';
import { getTicket } from 'lib/api';
import { GET_TICKET, PUT_TICKET } from './constants';
import { getTicketFailure, getTicketSuccess, putTicket, putTicketSuccess, putTicketFailure } from './actions';

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
    takeLatest(PUT_TICKET, putTicketSaga),
  ];
}

function* putTicketSaga(action) {
  try {
    const { data } = yield call(putTicket, action.ticket);
    yield put(putTicketSuccess(data));
  } catch (e) {
    yield put(putTicketFailure(e));
  }
}
