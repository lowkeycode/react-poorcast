import { createContext, useState } from 'react';

const OverlaysContext = createContext({
  transferModalOpen: false,
  payBillModalOpen: false
});


export const OverLaysContextProvider = ({children}) => {

  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [payBillModalOpen, setpayBillModalOpen] = useState(false);

  return (
    <OverlaysContext.Provider value={{
      
    }}>
      {children}
    </OverlaysContext.Provider>
  )
}

export default OverlaysContext
