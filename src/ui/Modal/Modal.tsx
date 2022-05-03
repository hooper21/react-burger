import React, { Fragment, FC } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from "./Modal.module.css";

type TParams = {
    title?: string;
    children?: any;
    onClose?: () => void;
};

const Modal: FC<TParams> = ({ title, onClose, children }: TParams) => {

    React.useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onClose) {
                onClose();
            };
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => {
            window.removeEventListener('keydown', closeOnEscape);
        }
    }, [onClose]);

    const modal: Element | null = document.getElementById("modal") ?? new Element();

    return ReactDOM.createPortal(
        (
            <Fragment>
                <ModalOverlay onClose={onClose} />
                <div className={styles.body}>
                    <h3 className={styles.title + " text text_type_main-medium pl-10 pr-10 pt-10 pb-3"}>
                        {title}
                    </h3>
                    <button className={styles.close} onClick={onClose}>
                        <CloseIcon type='primary'/>
                    </button>
                    {children}
                </div>
            </Fragment>
        ),
        modal
      );

};

export default Modal;