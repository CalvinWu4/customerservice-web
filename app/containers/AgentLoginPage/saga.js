import { authenticateUser } from 'lib/api';
import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS } from './constants';
import { authenticateUserSuccess, authenticateUserFailure } from './actions';

function* authenticateUserSaga() {
  const result = authenticateUser();
  if (result) {
    yield put(authenticateUserSuccess());
  } else {
    yield put(authenticateUserFailure());
  }
}

function* authenticateUserSuccessSaga() {
  yield put(push('/tickets'));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(AUTHENTICATE_USER, authenticateUserSaga),
    takeLatest(AUTHENTICATE_USER_SUCCESS, authenticateUserSuccessSaga),
  ];
}
