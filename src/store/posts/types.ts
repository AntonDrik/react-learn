import {IPost} from "../../components/post/types/IPost";
import {ActionType} from "typesafe-actions";
import {addPostsToStore, openPost, toggleFavorite} from "./actions";

export interface IPostsState {
    readonly posts: IPost[];
    readonly openedPost?: IPost;
}

export type PostsAction =
    | ActionType<typeof addPostsToStore>
    | ActionType<typeof openPost>
    | ActionType<typeof toggleFavorite>
