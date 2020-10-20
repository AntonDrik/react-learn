import React, {ReactElement}         from "react";
import {useDispatch, useSelector}    from "react-redux";
import {getModal}                    from "../../store/modal/selectors";
import style                         from './modal.module.scss';
import common                        from '../../common.module.scss';
import {ReactComponent as CloseIcon} from '../../assets/img/close.svg';
import {setClasses}                  from "../../utils/setClasses";
import {closeModal}                  from "../../store/modal/actions";
import {IModalSize}                  from "../../store/modal/types";

export function ModalContainer(): ReactElement {

    const dispatch = useDispatch();

    const {component, isOpen, options} = useSelector(getModal);

    const getModalSize = () => {
        switch (options.size) {
            case IModalSize.SMALL:
                return '400px';
            case IModalSize.LARGE:
                return '800px';
            default:
                return '400px';
        }
    }

    const handleCloseModal = () => dispatch(closeModal());

    if (!isOpen) return <></>;
    return <>
        <div className={style.overlay}>
            <div className={style.card} style={{width: getModalSize()}}>
                <div className={style.cardTitle}>
                    {options.title}
                    <div className={style.cardControls}>
                        <CloseIcon
                            className={setClasses(style.closeIcon, common.icon)}
                            onClick={handleCloseModal}
                        />
                    </div>
                </div>
                <div className={style.cardBody}>
                    {component}
                </div>
            </div>
        </div>
    </>
}
