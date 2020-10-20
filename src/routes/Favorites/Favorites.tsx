import React, {ReactElement} from "react";
import common                from '../../common.module.scss';
import {useSelector}         from "react-redux";
import {getFavoritePosts}    from "../../store/posts/selectors";
import {Post}                from "../../components/Post/Post";

export default function Favorites(): ReactElement {

    const favoritePosts = useSelector(getFavoritePosts);

    const posts = favoritePosts.map(post => <Post size={4} post={post} key={post.id}/>);

    return <div className={common.container}>{posts}</div>
}
