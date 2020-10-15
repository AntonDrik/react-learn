import {initialState} from "./initialState";
import {IPostsState, PostsActionTypes} from "./types";

export function postsReducer(state = initialState, action: PostsActionTypes): IPostsState {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                posts: action.payload
            }
        case "CREATE_POST":
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}
