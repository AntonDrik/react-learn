import {ActionType}            from "typesafe-actions";
import {closeModal, openModal} from "./actions";
import {ReactElement}          from "react";

export enum IModalSize {
    SMALL,
    LARGE
}

export interface IModalOptions {
    title: string;
    size?: IModalSize,
}

export interface IModalState {
    component: ReactElement | undefined;
    props?: any,
    options: IModalOptions;
    isOpen: boolean;
}

export type ModalAction =
    | ActionType<typeof openModal>
    | ActionType<typeof closeModal>
