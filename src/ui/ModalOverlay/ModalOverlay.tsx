import { FC } from "react";
import styles from "./ModalOverlay.module.css";

type TParams = {
  onClose?: any,
};

const ModalOverlay: FC<TParams> = ({ onClose }: TParams) => {

  return <div className={styles.overlay} onClick={onClose}></div>;

};

export default ModalOverlay;
