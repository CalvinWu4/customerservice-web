import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TICKET } from './constants';
import { getTicketAPI } from './../../api';
import { getTicketSucceded } from './actions';

function* getTicketSaga(action) {
  try {
    const { data } = yield call(getTicketAPI, action.ticketId);
    yield put(getTicketSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKET, getTicketSaga),
  ];
}
