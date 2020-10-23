import {ThunkAction} from "redux-thunk";
import {RootState}   from "./RootState";
import {Action}      from "typesafe-actions";

export type Thunk<A extends Action, ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, A>;
