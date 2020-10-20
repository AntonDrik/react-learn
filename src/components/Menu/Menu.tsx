import React, {ReactElement} from "react";
import {Link}                from "react-router-dom";
import style                 from './menu.module.scss';

export default function Menu(): ReactElement {

    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                </ul>
            </nav>
        </div>
    )
}
