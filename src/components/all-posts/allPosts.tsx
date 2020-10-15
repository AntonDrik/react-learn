import React from "react";
import style from './allPosts.module.scss';
import common from '../../common.module.scss';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from "../../store/rootReducer";
import Post from "../post/post";

const mapState = (state: RootState) => ({
    allPosts: state.posts.posts
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

class AllPosts extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        const posts = this.props.allPosts.map((post, i) => <Post post={post} key={i}/>)
        return (
            <div className={[style.container, common.container].join(' ')}>
                {posts}
            </div>
        );
    }
}

export default connector(AllPosts);
