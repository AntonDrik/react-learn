import {RootState} from "../rootReducer";

export const getActivePosts = (state: RootState) =>
    state.posts.posts.filter(post => !post.isFavorite);

export const getFavoritePosts = (state: RootState) =>
    state.posts.posts.filter(post => post.isFavorite);

export const getOpenedPost = (state: RootState) =>
    state.posts.openedPost;
