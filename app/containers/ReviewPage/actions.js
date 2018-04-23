/*
 *
 * ReviewPage actions
 *
 */

import { CREATE_REVIEW, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILED, POST_REVIEW, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE } from './constants';

export function createReview(review) {
  return {
    type: CREATE_REVIEW,
    review,
  };
}

export function createReviewSuccess(review) {
  return {
    type: CREATE_REVIEW_SUCCESS,
    review,
  };
}

export function createReviewFailed(error) {
  return {
    type: CREATE_REVIEW_FAILED,
    error,
  };
}

export function postReview(agentId) {
  return {
    type: POST_REVIEW,
    agentId,
  };
}

export function postReviewSuccess(error) {
  return {
    type: POST_REVIEW_SUCCESS,
    error,
  };
}

export function postReviewFailure(error) {
  return {
    type: POST_REVIEW_FAILURE,
    error,
  };
}

