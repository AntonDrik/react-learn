import React, {ReactElement}         from "react";
import {ReactComponent as CloseIcon} from "../../../../assets/img/close.svg";
import {setClasses}                  from "../../../../utils/setClasses";
import common                        from "../../../../common.module.scss";
import {IModalCardProps}             from "./types/IModalCardProps";
import style                         from './modalCard.module.scss';
import {IModalSize}                  from "../../../../store/modal/types";
import {closeModal}                  from "../../../../store/modal/actions";
import {useDispatch}                 from "react-redux";

export function ModalCard(props: IModalCardProps): ReactElement {

    const {component, options} = props;

    const dispatch = useDispatch();

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

    return <>

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

    </>
}
