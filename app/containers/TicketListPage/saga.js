import { takeLatest, call, put } from 'redux-saga/effects';
import { getTicketListAPI } from 'api';
import { GET_TICKETS } from './constants';
import { getTicketsSucceded } from './actions';

function* getTicketsSaga(action) {
  try {
    const { data } = yield call(getTicketListAPI, action.accountId, action.accountType);
    yield put(getTicketsSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKETS, getTicketsSaga),
  ];
}
