import React from "react";
import style from './post-info.module.scss';
import common from '../../common.module.scss';
import {setClasses} from "../../helpers/helpers";
import {RootState} from "../../store/rootReducer";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState) => ({
    post: state.posts.openedPost
});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

class PostInfo extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.state = {};

    }

    render() {
        const post = this.props.post;
        return (
            <div className={setClasses(style.container, common.container)}>
                {
                    !post
                        ? <div className={style.empty}>Выберите пост</div>
                        : <>
                            <span className={style.title}>{post.title}</span>
                            <p className={style.body}>{post.body}</p>
                          </>
                }
            </div>
        );
    }
}


export default connector(PostInfo);
