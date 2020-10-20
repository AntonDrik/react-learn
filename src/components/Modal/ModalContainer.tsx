import React, {ReactElement} from "react";
import {useSelector}         from "react-redux";
import {getModal}            from "../../store/modal/selectors";
import style                 from './modalContainer.module.scss';
import {ModalCard}           from "./components/ModalCard/ModalCard";

export function ModalContainer(): ReactElement {

    const {isOpen, component, options} = useSelector(getModal);

    if (!isOpen) return <></>;
    return <>
        <div className={style.overlay}>
            <ModalCard
                component={component}
                options={options}
            />
        </div>
    </>
}
