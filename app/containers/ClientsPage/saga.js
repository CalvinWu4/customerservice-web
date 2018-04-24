import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_CLIENTS } from './constants';
import { getClientsAPI } from './../../api';
import { getClientsSucceded } from './actions';

function* getClientsSaga() {
  try {
    const { data } = yield call(getClientsAPI);
    yield put(getClientsSucceded(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_CLIENTS, getClientsSaga),
  ];
}
