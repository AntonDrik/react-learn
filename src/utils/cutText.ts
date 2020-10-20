import {toUpperCase} from "./toUpperCase";

export const cutText = (value: string, length: number): string => {
    const title = toUpperCase(value);
    if (title.length < length) return title;
    return title.slice(0, length) + '...';
}
