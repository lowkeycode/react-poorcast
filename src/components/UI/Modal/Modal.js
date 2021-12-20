import ReactDOM from "react-dom";

import GreyCard from "../GreyCard/GreyCard";
import Overlay from "../Overlay/Overlay";
import TransferForm from "../../pages/accounts/TransferForm/TransferForm";

import styles from "./Modal.module.css";

const portalEl = document.getElementById("overlays");

const Modal = ({ setModalOpen }) => {
  return (
    <>
      {ReactDOM.createPortal(<Overlay setModalOpen={setModalOpen}/>, portalEl)}
      {ReactDOM.createPortal(
        <GreyCard className={styles.card}>
          <TransferForm setModalOpen={setModalOpen} />
        </GreyCard>,
        portalEl
      )}
    </>
  );
};

export default Modal;
