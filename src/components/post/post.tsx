import React, {ReactElement}            from "react";
import style                            from "./post.module.scss";
import common                           from '../../common.module.scss';
import {ReactComponent as StarIcon}     from '../../assets/img/star.svg';
import {ReactComponent as MoreInfoIcon} from '../../assets/img/more-info.svg';
import {useDispatch}                    from "react-redux";
import {IPostProps}                     from "./types/IPostProps";
import {cutText}                        from "../../utils/cutText";
import {openPost, toggleFavorite}       from "../../store/posts/actions";
import {setClasses}                     from "../../utils/setClasses";

export function Post({post}: IPostProps): ReactElement {

    const dispatch = useDispatch();

    const getCardTitle = () => cutText(post.title, 25);
    const getCardBody = () => cutText(post.body, 75);
    const getStarClass = () => (!post.isFavorite) ? style.starIcon_inactive : style.starIcon_active;

    const handleMoreInfoClick = () => dispatch(openPost(post));

    const handleToggleFavoriteClick = () => dispatch(toggleFavorite(post.id));

    return <>

        <div className={style.card}>
            <div className={style.cardTitle}>
                <span>{getCardTitle()}</span>
                <div className={style.cardControls}>
                    <MoreInfoIcon
                        className={setClasses(style.moreInfoIcon, common.icon)}
                        onClick={handleMoreInfoClick}
                    />
                    <StarIcon
                        className={setClasses(getStarClass(), common.icon)}
                        onClick={handleToggleFavoriteClick}
                    />
                </div>
            </div>
            <p className={style.cardBody}>{getCardBody()}</p>
        </div>

    </>
}
