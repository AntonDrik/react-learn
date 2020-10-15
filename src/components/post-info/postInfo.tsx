import React from "react";
import style from './post-info.module.scss';
import common from '../../common.module.scss';

class PostInfo extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className={[style.container, common.container].join(' ')}>

            </div>
        );
    }
}


export default PostInfo;
