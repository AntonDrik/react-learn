import React, {ReactElement} from "react";
import style                 from './post-info.module.scss';
import {IPostInfoProps}      from "./types/IPostInfoProps";

export function PostInfo(props: IPostInfoProps): ReactElement {

    const {body} = props.post;

    return <p className={style.body}>{body}</p>
}
