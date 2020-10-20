import {IPost} from "./IPost";

type PostContainerSize = 1 | 2 | 3 | 4;

export interface IPostProps {
    post: IPost;
    size?: PostContainerSize
}
