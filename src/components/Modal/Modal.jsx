import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from "./Modal.module.css";


function Modal({ title, onClose, children }) {

    React.useEffect(() => {
        const closeOnEscape = (evt) => {
            if (evt.key === 'Escape') {
                onClose();
            };
        };
        window.addEventListener('keydown', closeOnEscape);
        return () => {
            window.removeEventListener('keydown', closeOnEscape);
        }
    }, [onClose]);

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
        document.getElementById("modal")
      );

};


Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;