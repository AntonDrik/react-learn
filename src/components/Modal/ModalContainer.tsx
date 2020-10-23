import React, {ReactElement, useMemo} from "react";
import {useSelector}                  from "react-redux";
import {getModal}                     from "../../store/modal/selectors";
import style                          from './modalContainer.module.scss';
import {ModalCard}                    from "./components/ModalCard/ModalCard";
import setClasses                     from "../../utils/setClasses";

export function ModalContainer(): ReactElement | null {

    const {isOpen, component, options} = useSelector(getModal);

    const activeClass = useMemo(() => (isOpen ? style.overlayEnter : style.overlayLeave), [isOpen]);

    return <>
        <div className={setClasses(style.overlay, activeClass)}>
            <ModalCard
                component={component}
                options={options}
            />
        </div>
    </>
}
