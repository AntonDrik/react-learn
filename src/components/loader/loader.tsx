import React from "react";
import style from './loader.module.scss';

class Loader extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className={style.loader}>Loading...</div>);
    }
}

export default Loader;
