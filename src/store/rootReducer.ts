import {combineReducers} from "redux";
import {postsReducer}    from "./posts/reducers";
import {modalReducer}    from "./modal/reducers";

export const rootReducer = combineReducers({
    posts: postsReducer,
    modal: modalReducer
});
