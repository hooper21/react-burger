import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalOverlay from '../ModalOverlay/ModalOverlay';
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
            <div className={styles.container}>
                <ModalOverlay onClose={onClose} />
                <div className={styles.body}>
                    <h2 className={styles.title + " text text_type_main-large pl-10 pr-10 pt-10 pb-3"}>
                        {title}
                    </h2>
                    <button className={styles.close} onClick={onClose}></button>
                    {children}
                </div>
            </div>
        ),
        document.getElementById("modal")
      );

};


Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
};

export default Modal;