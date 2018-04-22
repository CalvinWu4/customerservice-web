import { takeLatest, call, put } from 'redux-saga/effects';
import { getClientsAPI, postLoginAPI } from 'api';
import { GET_CLIENTS, POST_LOGIN } from './constants';
import { getClientsSucceded, postLoginSucceded } from './actions';

function* getClientsSaga() {
  try {
    const { data } = yield call(getClientsAPI);
    yield put(getClientsSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

function* postLoginSaga(action) {
  try {
    const { data } = yield call(postLoginAPI, action.email, action.password);
    yield put(postLoginSucceded(data));
  } catch (e) {
    console.log(e);
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_CLIENTS, getClientsSaga),
    takeLatest(POST_LOGIN, postLoginSaga),
  ];
}
