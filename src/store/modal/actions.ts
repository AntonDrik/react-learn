import {createAction}               from "typesafe-actions";
import {MODAL}                      from "../actionTypes"
import {IModalOptions, IModalState} from "./types";
import {ReactElement}               from "react";
export const openModal = createAction(
    MODAL.OPEN,
    (
        component: ReactElement,
        options: IModalOptions
    ): IModalState => ({component, options, isOpen: true})
)();

export const closeModal = createAction(
    MODAL.CLOSE,
    () => ({isOpen: false})
)();
