import React, {ReactElement, useEffect, useState} from "react";
import common from '../../common.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getActivePosts, hasPosts} from "../../store/posts/selectors";
import {addPostsToStore} from "../../store/posts/actions";
import {IPost} from "../../components/Post/types/IPost";
import {Loader} from "../../components/Loader/Loader";
import {Post} from "../../components/Post/Post";
import ModifyText from '../../utils/TextBuilder';

export default function Home(): ReactElement {

    const [loading, setLoading] = useState<boolean>(false);

    const allPosts = useSelector(getActivePosts);
    const postsLoaded = useSelector(hasPosts);

    const dispatch = useDispatch();

    const loadPosts = () => {

        if (postsLoaded) return;

        setLoading(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then((posts: IPost[]) => {
                    dispatch(addPostsToStore(posts));
                    setLoading(false);
                })
        }, 1000)

    }

    useEffect(() => {
        loadPosts();
    }, [])

    const posts = allPosts.map(post => <Post size={4} post={post} key={post.id}/>);

    return <div className={common.container}>
        {loading ? <Loader/> : posts}
    </div>
}
