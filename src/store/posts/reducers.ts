import {initialState} from "./initialState";
import {IPostsState, PostsActionTypes} from "./types";
import {IPostTypes} from "../../components/post/types/IPost";

export function postsReducer(state = initialState, action: PostsActionTypes): IPostsState {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                posts: action.payload.map(post => ({
                    ...post,
                    type: IPostTypes.JSON_PLACEHOLDER,
                    isFavorite: false
                }))
            }
        case "OPEN_POST":
            return {...state, openedPost: action.payload}
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload) return post;
                    return {...post, isFavorite: true}
                })
            }
        case "REMOVE_FROM_FAVORITE":
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload) return post;
                    return {...post, isFavorite: false}
                })
            }
        default:
            return state;
    }
}
