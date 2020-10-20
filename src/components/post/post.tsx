import React from "react";
import {IPost} from "./types/IPost";
import style from "./post.module.scss";
import common from '../../common.module.scss';
import {ReactComponent as StarIcon} from '../../assets/img/star.svg';
import {ReactComponent as MoreInfoIcon} from '../../assets/img/more-info.svg';
import {setClasses} from "../../helpers/helpers";
import {openPost, addToFavorite, removeFromFavorite} from "../../store/posts/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {openPost, addToFavorite, removeFromFavorite};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
    post: IPost;
}

class Post extends React.Component<Props, any> {

    private readonly post: IPost;

    constructor(props: Props) {
        super(props);
        this.state = {};
        this.post = this.props.post;
    }

    toUpperCase(value: string) {
        return value[0].toUpperCase() + value.slice(1);
    }

    getTitleBody() {
        const title = this.toUpperCase(this.post.title);
        if (title.length < 25) return title;
        return title.slice(0, 25) + '...';
    }

    getCardBody() {
        const text = this.toUpperCase(this.post.body);
        if (text.length < 75) return text;
        return text.slice(0, 75) + '...';
    }

    handleMoreInfoClick = () => {
        this.props.openPost(this.post);
    }

    handleToggleFavoriteClick = () => {
        if (!this.post.isFavorite) {
            this.props.addToFavorite(this.post.id);
            return;
        }
        this.props.removeFromFavorite(this.post.id);
    }

    getStarClass() {
        return (!this.post.isFavorite) ? style.starIcon_inactive : style.starIcon_active;
    }

    render() {
        return (
            <div className={style.card}>
                <div className={style.cardTitle}>
                    <span>{this.getTitleBody()}</span>
                    <div className={style.cardControls}>
                        <MoreInfoIcon
                            className={setClasses(style.moreInfoIcon, common.icon)}
                            onClick={this.handleMoreInfoClick}
                        />
                        <StarIcon
                            className={setClasses(this.getStarClass(), common.icon)}
                            onClick={this.handleToggleFavoriteClick}
                        />
                    </div>
                </div>
                <p className={style.cardBody}>{this.getCardBody()}</p>
            </div>
        );
    }
}

export default connector(Post);
