import { requestReplacement, getTicket } from 'lib/api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REQUEST_REPLACEMENT, REQUEST_REPLACEMENT_SUCCESS, GET_TICKET } from './constants';

import { requestReplacementSuccess, requestReplacementFailure, getTicketFailure, getTicketSuccess } from './actions';

function* requestReturnSaga(action) {
  try {
    yield call(requestReplacement, action.requestData);
    yield put(requestReplacementSuccess());
  } catch (e) {
    yield put(requestReplacementFailure());
  }
}

function* requestReturnSuccessSaga() {
  yield put(push('/tickets'));
}

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
    takeLatest(REQUEST_REPLACEMENT, requestReturnSaga),
    takeLatest(REQUEST_REPLACEMENT_SUCCESS, requestReturnSuccessSaga),
    takeLatest(GET_TICKET, getTicketSaga),
  ];
}
