import jwt from 'jwt-decode';
import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getClientsAPI, postLoginAPI, getClientAPI } from '../../api';
import { GET_CLIENTS, POST_LOGIN, GET_CLIENT, POST_LOGIN_SUCCEDED } from './constants';
import { getClientsSucceded, postLoginSucceded, getClientSucceded } from './actions';

function* getClientsSaga() {
  try {
    const { data } = yield call(getClientsAPI);
    yield put(getClientsSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

function* getClientSaga(action) {
  try {
    const { data } = yield call(getClientAPI, action.clientId);
    yield put(getClientSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

function* postLoginSaga(action) {
  try {
    const { data } = yield call(postLoginAPI, action.email, action.password);

    const token = jwt(data.token);
    sessionStorage.setItem('kuwcs', data.token);
    const result = yield call(getClientAPI, token.id);

    yield put(postLoginSucceded({ ...data, account: result.data, accountType: token.accountType }));
  } catch (e) {
    console.error(e);
  }
}

function* postLoginSuccededSaga() {
  yield put(push('/tickets'));
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_CLIENTS, getClientsSaga),
    takeLatest(GET_CLIENT, getClientSaga),
    takeLatest(POST_LOGIN, postLoginSaga),
    takeLatest(POST_LOGIN_SUCCEDED, postLoginSuccededSaga),
  ];
}
