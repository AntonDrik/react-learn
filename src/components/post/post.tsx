import React from "react";
import {IPost} from "./types/IPost";
import style from "./post.module.scss";
import {ReactComponent as StarIcon} from '../../assets/img/star.svg';

interface Props {
    post: IPost;
}

class Post extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    toUpperCase(value: string) {
        return value[0].toUpperCase() + value.slice(1);
    }

    getTitleBody() {
        const title = this.toUpperCase(this.props.post.title);
        if (title.length < 25) return title;
        return title.slice(0, 25) + '...';
    }

    getCardBody() {
        const text = this.toUpperCase(this.props.post.body);
        if (text.length < 75) return text;
        return text.slice(0, 75) + '...';
    }

    render() {
        return (
            <div className={style.card}>
                <div className={style.cardTitle}>
                    <span>{this.getTitleBody()}</span>
                    <div className={style.cardControls}>
                        <StarIcon className={style.cardIcon}/>
                    </div>
                </div>
                <p className={style.cardBody}>{this.getCardBody()}</p>
            </div>
        );
    }
}

export default Post;
