import { createContext, useState } from 'react';

const OverlaysContext = createContext({
  transferModalOpen: false,
  payBillModalOpen: false
});


export const OverlaysContextProvider = ({children}) => {

  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [payBillModalOpen, setPayBillModalOpen] = useState(false);

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
