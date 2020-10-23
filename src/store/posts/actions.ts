import {IPost}                           from "../../components/Post/types/IPost";
import {POSTS}                        from "../actionTypes";
import {createAction, createAsyncAction} from "typesafe-actions";

export const fetchPostsActions = createAsyncAction(
    POSTS.REQUEST,
    POSTS.SUCCESS,
    POSTS.FAILURE
)<undefined, IPost[], void>();

export const openPost = createAction(
    POSTS.OPEN,
    (post: IPost) => ({post})
)();

export const toggleFavorite = createAction(
    POSTS.TOGGLE_FAVORITE,
    (postId: number) => ({postId})
)();
