import React from "react";
import style from './allPosts.module.scss';
import common from '../../common.module.scss';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from "../../store/rootReducer";
import Post from "../post/post";
import {setClasses} from "../../helpers/helpers";

const mapState = (state: RootState) => ({
    posts: state.posts.posts
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

class AllPosts extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    get activePosts() {
        return this.props.posts.filter(post => !post.isFavorite);
    }

    render() {
        const posts = this.activePosts.map(post => {
            return (
                <div className={style.gridItem} key={post.id}>
                    <Post post={post}/>
                </div>
            )
        });
        return (
            <div className={setClasses(style.container, common.container)}>
                {posts}
            </div>
        );
    }
}

export default connector(AllPosts);
