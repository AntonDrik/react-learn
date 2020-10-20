import {ADD_TO_FAVORITE, LOAD_POSTS, OPEN_POST, PostsActionTypes, REMOVE_FROM_FAVORITE} from './types';
import {IPost} from "../../components/post/types/IPost";

export function addPostsToStore(posts: IPost[]): PostsActionTypes {
    return {
        type: LOAD_POSTS,
        payload: posts
    }
}

export function openPost(post: IPost): PostsActionTypes {
    return {
        type: OPEN_POST,
        payload: post
    }
}

export function addToFavorite(postId: number): PostsActionTypes {
    return {
        type: ADD_TO_FAVORITE,
        payload: postId
    }
}

export function removeFromFavorite(postId: number): PostsActionTypes {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: postId
    }
}
