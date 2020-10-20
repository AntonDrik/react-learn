import {RootState} from "../rootReducer";

export const hasPosts = (state: RootState) => state.posts.loaded;

export const getActivePosts = (state: RootState) =>
    state.posts.posts.filter(post => !post.isFavorite);

export const getFavoritePosts = (state: RootState) =>
    state.posts.posts.filter(post => post.isFavorite);
