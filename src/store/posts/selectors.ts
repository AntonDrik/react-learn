import {RootState} from "../types/RootState";

export const getPostsLoader = (state: RootState) => state.posts.loading;

export const getActivePosts = (state: RootState) =>
    state.posts.posts.filter(post => !post.isFavorite);

export const getFavoritePosts = (state: RootState) =>
    state.posts.posts.filter(post => post.isFavorite);
