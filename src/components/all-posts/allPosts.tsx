import React, {ReactElement} from "react";
import {Post}                from "../post/post";
import style                 from './allPosts.module.scss';
import common                from '../../common.module.scss';
import {useSelector}         from 'react-redux';
import {getActivePosts}      from "../../store/posts/selectors";
import {setClasses}          from "../../utils/setClasses";

export function AllPosts(): ReactElement {

    const allPosts = useSelector(getActivePosts);

    const posts = allPosts.map(post => {
        return (
            <div className={style.gridItem} key={post.id}>
                <Post post={post}/>
            </div>
        )
    });

    return <>
        <div className={setClasses(style.container, common.container)}>
            {posts}
        </div>
    </>
}
