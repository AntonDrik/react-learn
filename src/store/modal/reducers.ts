import {MODAL}                                from "../actionTypes";
import {IModalSize, IModalState, ModalAction} from "./types";

export const initialState: IModalState = {
    component: undefined,
    props: {},
    options: {
        title: 'Modal',
        size: IModalSize.SMALL
    },
    isOpen: false
}

export function modalReducer(
    state = initialState,
    action: ModalAction
): IModalState {
    switch (action.type) {
        case MODAL.OPEN:
            return {...state, ...action.payload}
        case MODAL.CLOSE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
