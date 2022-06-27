import { ACTION_TYPES } from "../../actions/postAction";
import { put } from 'redux-saga/effects';

export function* fetchPostsHandler(){
    try{
        const postsReq = yield fetch(`https://jsonplaceholder.typicode.com/posts`); // Fetch call.
        const posts = yield postsReq.json(); // Convert to JSON.

        yield put({ type: ACTION_TYPES.FETCH_POSTS_SUCCESS, payload: posts });
    }
    catch(e){
        yield put({ type: ACTION_TYPES.FETCH_POSTS_FAILED });
    }
}