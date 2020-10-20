import {IPost}                                     from "../../components/Post/types/IPost";
import {ActionType}                                from "typesafe-actions";
import {addPostsToStore, openPost, toggleFavorite} from "./actions";

export interface IPostsState {
    readonly posts: IPost[];
    readonly openedPost?: IPost;
    readonly loaded: boolean;
}

export type PostsAction =
    | ActionType<typeof addPostsToStore>
    | ActionType<typeof openPost>
    | ActionType<typeof toggleFavorite>
