import { push } from 'react-router-redux';

import { takeLatest, call, put } from 'redux-saga/effects';
import { createTicket } from 'lib/api';
import { CREATE_TICKET } from './constants';
import { createTicketFailure } from './actions';

// Individual exports for testing
function* createTicketSaga(action) {
  try {
    yield call(createTicket, action.ticket, action.clientId);
    yield put(push('/tickets'));
  } catch (e) {
    createTicketFailure(e, action);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(CREATE_TICKET, createTicketSaga),
  ];
}

