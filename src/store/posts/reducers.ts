import {IPostsState, LoadPostsActions, PostsAction} from "./types";
import {POSTS}                                      from "../actionTypes";
import {Thunk}                                      from "../types/Thunk";
import {RootState}                                  from "../types/RootState";
import {fetchPostsActions}                          from "./actions";
import {IPost, IPostTypes}                          from "../../components/Post/types/IPost";

export const initialState: IPostsState = {
    posts: [],
    openedPost: undefined,
    loaded: false,
    loading: false
}

const checkPostsExist = ({posts}: RootState): boolean => posts.loaded;
const initPost = (post: IPost): IPost => ({...post, type: IPostTypes.JSON_PLACEHOLDER, isFavorite: false});
const toggleFavorite = (state: IPostsState, postId: number): IPostsState => {
    return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id !== postId) return post;
            return {...post, isFavorite: !post.isFavorite}
        })
    }
}

export function fetchPosts(): Thunk<LoadPostsActions> {
    return (
        dispatch,
        getState
    ) => {
        console.log(checkPostsExist(getState()));
        if (checkPostsExist(getState())) return Promise.resolve();

        dispatch(fetchPostsActions.request());
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts: IPost[]) => posts.map(initPost))
            .then((posts: IPost[]) => dispatch(fetchPostsActions.success(posts)))
            .catch(err => dispatch(fetchPostsActions.failure()))
    }
}


export function postsReducer(
    state = initialState,
    action: PostsAction
): IPostsState {
    switch (action.type) {
        case POSTS.REQUEST:
            return {...state, loading: true}
        case  POSTS.SUCCESS:
            return {...state, loading: false, loaded: true, posts: action.payload}
        case POSTS.FAILURE:
            return {...state, loading: false}
        case POSTS.OPEN:
            return {...state, openedPost: action.payload.post}
        case POSTS.TOGGLE_FAVORITE:
            const {postId} = action.payload;
            return toggleFavorite(state, postId);
        default:
            return state;
    }
}
