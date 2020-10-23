import React, {ReactElement, useMemo}   from "react";
import style                            from "./post.module.scss";
import common                           from '../../common.module.scss';
import {ReactComponent as StarIcon}     from '../../assets/img/star.svg';
import {ReactComponent as MoreInfoIcon} from '../../assets/img/more-info.svg';
import {useDispatch}                    from "react-redux";
import {IPostProps}                     from "./types/IPostProps";
import {toggleFavorite}                 from "../../store/posts/actions";
import {openModal}                      from "../../store/modal/actions";
import {PostInfo}                       from "../PostInfo/PostInfo";
import TextBuilder                      from '../../utils/TextBuilder';
import setClasses                       from '../../utils/setClasses';

export function Post(
    {
        post,
        size = 25
    }: IPostProps
): ReactElement {

    const dispatch = useDispatch();

    const card = useMemo(() => {
        return {
            title: TextBuilder.set(post.title).cut(25).capitalizeFirstLetter().value,
            body: TextBuilder.set(post.body).cut(75).capitalizeFirstLetter().value,
            starClass: (!post.isFavorite) ? style.starIcon_inactive : style.starIcon_active
        }
    }, [post]);

    const cardSize = useMemo(() => style[`card${size}`], [size]);

    const handleMoreInfoClick = () => dispatch(openModal(<PostInfo post={post}/>, {title: card.title}));
    const handleToggleFavoriteClick = () => dispatch(toggleFavorite(post.id));

    return <>

        <div className={setClasses(style.card, cardSize)}>
            <div className={style.cardTitle}>
                <span>{card.title}</span>
                <div className={style.cardControls}>
                    <MoreInfoIcon
                        className={setClasses(style.moreInfoIcon, common.icon)}
                        onClick={handleMoreInfoClick}
                    />
                    <StarIcon
                        className={setClasses(card.starClass, common.icon)}
                        onClick={handleToggleFavoriteClick}
                    />
                </div>
            </div>
            <p className={style.cardBody}>{card.body}</p>
        </div>

    </>
}
