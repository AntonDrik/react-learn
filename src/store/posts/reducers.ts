import {IPostsState, PostsAction} from "./types";
import {POSTS}                    from "../actionTypes";
import {IPostTypes}               from "../../components/Post/types/IPost";

export const initialState: IPostsState = {
    posts: [],
    openedPost: undefined,
    loaded: false
}

export function postsReducer(
    state = initialState,
    action: PostsAction
): IPostsState {
    switch (action.type) {
        case POSTS.LOAD:
            return {
                ...state,
                posts: action.payload.posts.map(post => ({
                    ...post,
                    type: IPostTypes.JSON_PLACEHOLDER,
                    isFavorite: false
                })),
                loaded: true
            }
        case POSTS.OPEN:
            return {...state, openedPost: action.payload.post}
        case POSTS.TOGGLE_FAVORITE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload.postId) return post;
                    return {...post, isFavorite: !post.isFavorite}
                })
            }
        default:
            return state;
    }
}
