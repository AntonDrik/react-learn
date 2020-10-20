import {IPost} from "../../components/post/types/IPost";

export interface IPostsState {
    posts: IPost[];
    openedPost?: IPost;
}

export const LOAD_POSTS = 'LOAD_POSTS';
export const OPEN_POST = 'OPEN_POST';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

interface ILoadPostsAction {
    type: typeof LOAD_POSTS,
    payload: IPost[]
}

interface IOpenPostAction {
    type: typeof OPEN_POST,
    payload: IPost
}

interface IAddToFavoriteAction {
    type: typeof ADD_TO_FAVORITE,
    payload: number
}

interface IRemoveFromFavoriteAction {
    type: typeof REMOVE_FROM_FAVORITE,
    payload: number
}

interface IToggleFavoriteAction {
    type: typeof TOGGLE_FAVORITE,
    payload: number
}

export type PostsActionTypes =
    ILoadPostsAction
    | IOpenPostAction
    | IAddToFavoriteAction
    | IRemoveFromFavoriteAction;
