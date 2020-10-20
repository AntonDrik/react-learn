import React, {ReactElement} from "react";
import style                 from './post-info.module.scss';
import common                from '../../common.module.scss';
import {useSelector}         from "react-redux";
import {setClasses}          from "../../utils/setClasses";
import {getOpenedPost}       from "../../store/posts/selectors";

export function PostInfo(): ReactElement {

    const post = useSelector(getOpenedPost);

    return <>

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

    </>
}
