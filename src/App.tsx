import React from 'react';
import style from './common.module.scss';
import {IPost} from "./components/post/types/IPost";
import Loader from "./components/loader/loader";
import MainPage from "./view/main-page/mainPage";
import {addPostsToStore} from "./store/posts/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {addPostsToStore};

const connector = connect(null, mapDispatch);

type Props = ConnectedProps<typeof connector>
type State = { loading: boolean };

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        setTimeout(() => this.loadPosts(), 1000);
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts: IPost[]) => {
                this.props.addPostsToStore(posts);
                this.setState({loading: false});
            })
    }

    render() {
        return (
            <div className={style.appContainer}>
                { this.state.loading ? <Loader/> : <MainPage/> }
            </div>
        );
    }
}

export default connector(App);
