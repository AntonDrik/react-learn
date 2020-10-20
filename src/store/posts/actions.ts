import {IPost} from "../../components/Post/types/IPost";
import {POSTS} from "../actionTypes";
import {createAction} from "typesafe-actions";

export const addPostsToStore = createAction(
    POSTS.LOAD,
    (posts: IPost[]) => ({posts})
)();

export const openPost = createAction(
    POSTS.OPEN,
    (post: IPost) => ({post})
)();

export const toggleFavorite = createAction(
    POSTS.TOGGLE_FAVORITE,
    (postId: number) => ({postId})
)();
