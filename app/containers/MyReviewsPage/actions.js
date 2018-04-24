/*
 *
 * MyReviewsPage actions
 *
 */

import { GET_REVIEWS, GET_REVIEWS_SUCCEDED, GET_REVIEWS_FAILED } from './constants';

export function getReviews(agentId) {
  return {
    type: GET_REVIEWS,
    agentId,
  };
}

export function getReviewsSucceded(reviews) {
  return {
    type: GET_REVIEWS_SUCCEDED,
    reviews,
  };
}

export function getReviewsFailed(error) {
  return {
    type: GET_REVIEWS_FAILED,
    error,
  };
}
