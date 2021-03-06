import ReactDOM from "react-dom";

import GreyCard from "../GreyCard/GreyCard";
import Overlay from "../Overlay/Overlay";
import TransferForm from "../../pages/accounts/TransferForm/TransferForm";
import PayBillForm from '../../pages/overview/PayBillForm/PayBillForm';
import DeleteUserConfirm from '../../pages/settings/DeleteUserConfirm/DeleteUserConfirm';


import styles from "./Modal.module.css";

const portalEl = document.getElementById("overlays");

const Modal = ({ type }) => {
  return (
    <>
      {ReactDOM.createPortal(<Overlay />, portalEl)}
      {ReactDOM.createPortal(
        <GreyCard className={styles.card}>
          {
            type === 'transfer' && <TransferForm />
          }
          {
            type === 'pay' && <PayBillForm />
          }
          {
            type === 'delete-user' && <DeleteUserConfirm/>
          }
        </GreyCard>,
        portalEl
      )}
    </>
  );
};

export default Modal;
