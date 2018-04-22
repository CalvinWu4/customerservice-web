import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TICKETS, POST_TICKET } from './constants';
import { getTicketsSucceded, getTickets } from './actions';
import { getTicketListAPI, postTicketAPI } from './../../api';

function* getTicketsSaga(action) {
  try {
    const { data } = yield call(getTicketListAPI, action.accountId, action.accountType);
    yield put(getTicketsSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

function* postTicketSaga(action) {
  try {
    yield call(postTicketAPI, action.ticket, action.accountId, action.accountType);
    yield put(getTickets(action.accountId, action.accountType));
  } catch (e) {
    console.log(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKETS, getTicketsSaga),
    takeLatest(POST_TICKET, postTicketSaga),
  ];
}
