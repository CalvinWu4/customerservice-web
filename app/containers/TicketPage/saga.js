import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TICKET, PUT_TICKET, POST_COMMENT } from './constants';
import { getTicketAPI, putTicketAPI, postCommentAPI } from './../../api';
import { getTicketSucceded, getTicket } from './actions';

function* getTicketSaga(action) {
  try {
    const { data } = yield call(getTicketAPI, action.ticketId);
    yield put(getTicketSucceded(data));
  } catch (e) {
    console.error(e);
  }
}

function* putTicketSaga(action) {
  try {
    yield call(putTicketAPI, action.ticket, action.ticketId);
    yield put(getTicket(action.ticketId));
  } catch (e) {
    console.error(e);
  }
}

function* postCommentSaga(action) {
  try {
    yield call(postCommentAPI, action.comment, action.accountId, action.accountType);
    yield put(getTicket(action.comment.ticketId));
  } catch (e) {
    console.error(e);
  }
}

export default function* defaultSaga() {
  yield [
    takeLatest(GET_TICKET, getTicketSaga),
    takeLatest(PUT_TICKET, putTicketSaga),
    takeLatest(POST_COMMENT, postCommentSaga),
  ];
}
