import ReactDOM from "react-dom";

import GreyCard from "../GreyCard/GreyCard";
import Overlay from "../Overlay/Overlay";
import TransferForm from "../../pages/accounts/TransferForm/TransferForm";

import styles from "./Modal.module.css";

const portalEl = document.getElementById("overlays");

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Overlay />, portalEl)}
      {ReactDOM.createPortal(
        <GreyCard className={styles.card}>
          <TransferForm />
        </GreyCard>,
        portalEl
      )}
    </>
  );
};

export default Modal;
