import {IPost} from "../../components/post/types/IPost";
import {POSTS} from "../actionTypes";
import {createAction} from "typesafe-actions";

export const addPostsToStore = createAction(
    POSTS.LOAD_POSTS,
    (posts: IPost[]) => ({posts})
)();

export const openPost = createAction(
    POSTS.OPEN_POST,
    (post: IPost) => ({post})
)();

export const toggleFavorite = createAction(
    POSTS.TOGGLE_FAVORITE,
    (postId: number) => ({postId})
)();
