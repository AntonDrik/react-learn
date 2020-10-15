import {IPost} from "../../components/post/types/IPost";

export interface IPostsState {
    posts: IPost[];
}

export const LOAD_POSTS = 'LOAD_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const MARK_POST = 'MARK_POST';

interface ILoadPostsAction {
    type: typeof LOAD_POSTS,
    payload: IPost[]
}

interface ICreatePostAction {
    type: typeof CREATE_POST,
    payload: IPost
}

export type PostsActionTypes = ICreatePostAction | ILoadPostsAction;
