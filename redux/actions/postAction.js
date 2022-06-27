export const ACTION_TYPES = {
  // Define Action types
  FETCH_POSTS_REQUESTED: "FETCH_POSTS_REQUESTED",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILED: "FETCH_POSTS_FAILED",

  ADD_POST: "ADD_POST",
  REMOVE_POST: "REMOVE_POST",
};

// Create functions to handle your actions.
export const fetchPostsAction = () => ({
  type: ACTION_TYPES.FETCH_POSTS_REQUESTED,
});

export const addPostAction = (post) => ({
  type: ACTION_TYPES.ADD_POST,
  params: post,
});

export const removePostAction = (index) => ({
  type: ACTION_TYPES.REMOVE_POST,
  index
});
