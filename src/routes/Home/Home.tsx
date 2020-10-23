import React, {ReactElement, useCallback, useEffect} from "react";
import common                                        from '../../common.module.scss';
import {useDispatch, useSelector}                    from 'react-redux';
import {getActivePosts, getPostsLoader}              from "../../store/posts/selectors";
import {Loader}                                      from "../../components/Loader/Loader";
import {Post}                                        from "../../components/Post/Post";
import {fetchPosts}                                  from "../../store/posts/reducers";

export default function Home(): ReactElement {

    const allPosts = useSelector(getActivePosts);
    const loading = useSelector(getPostsLoader);

    const dispatch = useDispatch();

    const loadPosts = useCallback(() => dispatch(fetchPosts()), [dispatch]);

    useEffect(() => {
        loadPosts();
    }, [loadPosts])

    const posts = allPosts.map(post => <Post size={25} post={post} key={post.id}/>);

    return <div className={common.container}>
        {loading ? <Loader/> : posts}
    </div>
}
