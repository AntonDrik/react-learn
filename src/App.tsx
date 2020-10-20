import React, {ReactElement} from 'react';
import style                 from './common.module.scss';
import Home                  from "./routes/Home/Home";
import Favorites             from "./routes/Favorites/Favorites";
import Menu                  from "./components/Menu/Menu";
import {
    BrowserRouter as Router,
    Switch,
    Route
}                            from "react-router-dom";

export default function App(): ReactElement {
    return (
        <Router>
            <div className={style.appContainer}>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/favorites' component={Favorites}/>
                </Switch>
            </div>
        </Router>
    )
}
