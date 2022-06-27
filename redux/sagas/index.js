/*------- THIS IS THE MAIN SAGA COMPONENT -------*/

import { takeEvery, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../actions/postAction";
import { fetchPostsHandler, addPostHandler } from './handlers/post';

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPES.FETCH_POSTS_REQUESTED, fetchPostsHandler);
}