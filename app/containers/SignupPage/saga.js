import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { postClientAPI } from './../../api';
import { POST_CLIENT } from './constants';
import { postClientSucceded } from './actions';

function* postClientSaga(action) {
  try {
    const { data } = yield call(postClientAPI, action.client);
    yield put(postClientSucceded(data));
    yield put(push('/login'));
  } catch (e) {
    console.log(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(POST_CLIENT, postClientSaga),
  ];
}
