import { createContext, useState, useEffect } from 'react';

const OverlaysContext = createContext({
  transferModalOpen: false,
  payBillModalOpen: false
});


export const OverlaysContextProvider = ({children}) => {

  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [payBillModalOpen, setPayBillModalOpen] = useState(false);

  useEffect(() => {
    const exitModal = (e) => {
      if (e.key === "Escape") {
        setTransferModalOpen(false);
        setPayBillModalOpen(false);
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
      setPayBillModalOpen
    }}>
      {children}
    </OverlaysContext.Provider>
  )
}

export default OverlaysContext
