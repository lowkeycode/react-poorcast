import { createContext, useState, useEffect } from 'react';

const OverlaysContext = createContext({
  transferModalOpen: false,
  payBillModalOpen: false,
  deleteUserModalOpen: false
});


export const OverlaysContextProvider = ({children}) => {

  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [payBillModalOpen, setPayBillModalOpen] = useState(false);
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false);

  useEffect(() => {
    const exitModal = (e) => {
      if (e.key === "Escape") {
        setTransferModalOpen(false);
        setPayBillModalOpen(false);
        setDeleteUserModalOpen(false);
      }
    };

    window.addEventListener("keydown", exitModal);
    return () => window.removeEventListener("keydown", exitModal);
  });

  return (
    <OverlaysContext.Provider value={{
      transferModalOpen,
      setTransferModalOpen,
      payBillModalOpen,
      setPayBillModalOpen,
      deleteUserModalOpen,
      setDeleteUserModalOpen
    }}>
      {children}
    </OverlaysContext.Provider>
  )
}

export default OverlaysContext
