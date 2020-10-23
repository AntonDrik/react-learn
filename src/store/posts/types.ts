import {IPost}                                      from "../../components/Post/types/IPost";
import {ActionType}                                  from "typesafe-actions";
import {fetchPostsActions, openPost, toggleFavorite} from "./actions";

export interface IPostsState {
    readonly posts: IPost[];
    readonly openedPost?: IPost;
    readonly loaded: boolean;
    readonly loading: boolean;
}

export type LoadPostsActions = ActionType<typeof fetchPostsActions>;
export type OpenPostsAction = ActionType<typeof openPost>;
export type toggleFavoriteAction = ActionType<typeof toggleFavorite>;

export type PostsAction =
    | LoadPostsActions
    | OpenPostsAction
    | toggleFavoriteAction;
