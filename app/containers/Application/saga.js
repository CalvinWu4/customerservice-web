import { takeLatest, call, put } from 'redux-saga/effects';
import { getTicketapi, putTicketapi } from 'lib/api';
import { GET_TICKET, PUT_TICKET } from './constants';
import { getTicketFailure, getTicketSuccess, putTicketFailure, getTicket } from './actions';

function* getTicketSaga(action) {
  try {
    const { data } = yield call(getTicketapi, action.ticketId);
    yield put(getTicketSuccess(data));
  } catch (e) {
    yield put(getTicketFailure(e));
  }
}


function* putTicketSaga(action) {
  try {
    yield call(putTicketapi, action.ticket, action.ticketId);
    yield put(getTicket(action.ticketId));
  } catch (e) {
    yield put(putTicketFailure(e));
  }
}
export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKET, getTicketSaga),
    takeLatest(PUT_TICKET, putTicketSaga),
  ];
}
