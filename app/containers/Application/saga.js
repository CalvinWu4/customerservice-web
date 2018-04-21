import { takeLatest, call, put } from 'redux-saga/effects';
import { getTicketapi, putTicketapi } from 'lib/api';
import { GET_TICKET, PUT_TICKET, POST_RETURN } from './constants';
import { getTicketFailure, getTicketSuccess, putTicketFailure, getTicket, postReturn, postReturnFailure, postReturnSuccess } from './actions';

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

function* postReturnSaga(action) {
  try {
    yield call(postReturn, action.ticket, action.ticketId);
    yield put(postReturnSuccess());
  } catch (e) {
    yield put(postReturnFailure(e));
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKET, getTicketSaga),
    takeLatest(PUT_TICKET, putTicketSaga),
    takeLatest(POST_RETURN, postReturnSaga),
  ];
}
