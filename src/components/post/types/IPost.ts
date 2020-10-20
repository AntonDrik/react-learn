export enum IPostTypes {
    JSON_PLACEHOLDER = 'JSON_PLACEHOLDER'
}

export interface IPost {
    id: number;
    user_id: number;
    title: string;
    body: string;
    type: IPostTypes;
    isFavorite: boolean;
}
