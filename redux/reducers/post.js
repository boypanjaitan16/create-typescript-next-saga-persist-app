import { ACTION_TYPES } from "../actions/postAction";

// Define initial states.
const initialState = {
  posts: [],
  loading: false,
};

export default function postReducers(state = initialState, action){
  switch (action.type) {
    case ACTION_TYPES.FETCH_POSTS_REQUESTED:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case ACTION_TYPES.FETCH_POSTS_FAILED:
      return { ...state, loading: false };
    case ACTION_TYPES.ADD_POST:
      return { posts: [action.params, ...state.posts] };
    case ACTION_TYPES.REMOVE_POST:
      return { posts: state.posts.filter((_, index) => index !== action.index ) };
    default:
      return state;
  }
};
