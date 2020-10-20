import React, {ReactElement, useEffect, useState} from 'react';
import style                                      from './common.module.scss';
import {IPost}                                    from "./components/post/types/IPost";
import {Loader}                                   from "./components/loader/loader";
import MainPage                                   from "./view/main-page/mainPage";
import {addPostsToStore}                          from "./store/posts/actions";
import {useDispatch}                              from "react-redux";

export default function App(): ReactElement {

    const [loading, setLoading] = useState<boolean>(true)

    const dispatch = useDispatch();

    const loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts: IPost[]) => {
                dispatch(addPostsToStore(posts));
                setLoading(false);
            })
    }

    useEffect(() => {
        setTimeout(() => loadPosts(), 1000);
    })

    return (
        <div className={style.appContainer}>
            {loading ? <Loader/> : <MainPage/>}
        </div>
    )
}
