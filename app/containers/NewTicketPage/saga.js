import { takeLatest, call, put } from 'redux-saga/effects';
import { createTicket } from 'lib/api';
import { CREATE_TICKET } from './constants';
import { createTicketSuccess, createTicketFailure } from './actions';


// Individual exports for testing
function* createTicketSaga(action) {
  try {
    const { data } = yield call(createTicket);
    yield put(createTicketSuccess(data));
  } catch (e) {
    createTicketFailure(e, action);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(CREATE_TICKET, createTicketSaga),
  ];
}

