import React, {ReactElement} from "react";
import style                 from './favorite-posts.module.scss';
import common                from '../../common.module.scss';
import {useSelector}         from "react-redux";
import {Post}                from "../post/post";
import {getFavoritePosts}    from "../../store/posts/selectors";
import {setClasses}          from "../../utils/setClasses";

export function FavoritePosts(): ReactElement {

    const favoritePosts = useSelector(getFavoritePosts);

    const posts = favoritePosts.map(post => {
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
