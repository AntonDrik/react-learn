import {CREATE_POST, LOAD_POSTS, PostsActionTypes} from './types';
import {IPost} from "../../components/post/types/IPost";

export function addPostsToStore(posts: IPost[]): PostsActionTypes {
    return {
        type: LOAD_POSTS,
        payload: posts
    }
}

export function createPost(newPost: IPost): PostsActionTypes {
    return {
        type: CREATE_POST,
        payload: newPost
    }
}
