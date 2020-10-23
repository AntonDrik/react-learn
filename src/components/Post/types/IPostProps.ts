import {IPost} from './IPost';

type PostContainerSize = 100 | 50 | 25;

export interface IPostProps {
    post: IPost;
    size?: PostContainerSize
}
