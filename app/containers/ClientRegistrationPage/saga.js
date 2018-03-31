import { registerUser } from 'lib/api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REGISTER, REGISTER_SUCCESS } from './constants';

import { registerUserSuccess, registerUserFailure } from './actions';

function* registerUserSaga(action) {
  try {
    yield call(registerUser, action.client);
    yield put(registerUserSuccess());
  } catch (e) {
    yield put(registerUserFailure());
  }
}

function* registerUserSuccessSaga() {
  yield put(push('/tickets'));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(REGISTER, registerUserSaga),
    takeLatest(REGISTER_SUCCESS, registerUserSuccessSaga),
  ];
}
