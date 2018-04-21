import { takeLatest, call, put } from 'redux-saga/effects';
import { getClients } from 'api';
import { GET_CLIENTS } from './constants';
import { getClientsSucceded } from './actions';

function* getClientsSaga() {
  try {
    const { data } = yield call(getClients);
    yield put(getClientsSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_CLIENTS, getClientsSaga),
  ];
}
