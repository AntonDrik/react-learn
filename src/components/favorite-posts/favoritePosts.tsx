import React from "react";
import style from './favorite-posts.module.scss';
import common from '../../common.module.scss';

class FavoritePosts extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className={[style.container, common.container].join(' ')}>
                Favorite posts
            </div>
        );
    }
}

export default FavoritePosts;
