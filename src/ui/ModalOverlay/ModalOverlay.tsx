import { FC } from "react";
import styles from "./ModalOverlay.module.css";

type TParams = {
  onClose?: () => void;
};

const ModalOverlay: FC<TParams> = ({ onClose }: TParams) => {

  return <div className={styles.overlay} onClick={onClose}></div>;

};

export default ModalOverlay;
