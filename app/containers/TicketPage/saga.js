import { requestReplacement } from 'lib/api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { REQUEST_REPLACEMENT, REQUEST_REPLACEMENT_SUCCESS } from './constants';

import { requestReplacementSuccess, requestReplacementFailure } from './actions';

function* requestReturnSaga(action) {
  try {
    yield call(requestReplacement, action.requestData);
    yield put(requestReplacementSuccess());
  } catch (e) {
    yield put(requestReplacementFailure());
  }
}

function* requestReturnSuccessSaga() {
  yield put(push('/tickets'));
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(REQUEST_REPLACEMENT, requestReturnSaga),
    takeLatest(REQUEST_REPLACEMENT_SUCCESS, requestReturnSuccessSaga),
  ];
}
