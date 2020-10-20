import {AllPosts} from "../../components/all-posts/allPosts";
import {FavoritePosts} from "../../components/favorite-posts/favoritePosts";
import {PostInfo} from "../../components/post-info/postInfo";
import React from "react";

class MainPage extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <AllPosts/>
                <FavoritePosts/>
                <PostInfo/>
            </>
        );
    }
}

export default MainPage;
