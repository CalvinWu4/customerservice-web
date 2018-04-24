import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_REVIEWS } from './constants';
import { getReviewsAPI } from './../../api';
import { getReviewsSucceded } from './actions';

function* getReviewsSaga(action) {
  try {
    const { data } = yield call(getReviewsAPI, action.agentId);
    yield put(getReviewsSucceded(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_REVIEWS, getReviewsSaga),
  ];
}
