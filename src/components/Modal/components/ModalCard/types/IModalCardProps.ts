import {ReactElement}  from "react";
import {IModalOptions} from "../../../../../store/modal/types";

export interface IModalCardProps {
    component: ReactElement | undefined,
    options: IModalOptions
}
