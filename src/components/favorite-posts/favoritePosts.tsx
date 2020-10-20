import React from "react";
import style from './favorite-posts.module.scss';
import common from '../../common.module.scss';
import {setClasses} from "../../helpers/helpers";
import {RootState} from "../../store/rootReducer";
import {connect, ConnectedProps} from "react-redux";
import Post from "../post/post";

const mapState = (state: RootState) => ({
    posts: state.posts.posts
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

class FavoritePosts extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    get favoritePosts() {
        return this.props.posts.filter(post => post.isFavorite);
    }

    render() {
        const posts = this.favoritePosts.map(post => {
            return (
                <div className={style.gridItem} key={post.id}>
                    <Post post={post}/>
                </div>
            );
        });
        return (
            <div className={setClasses(style.container, common.container)}>
                {posts}
            </div>
        );
    }
}

export default connector(FavoritePosts);
