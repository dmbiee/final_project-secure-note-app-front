import React, { createContext, useState, type ReactNode, type ReactElement, useContext } from 'react';
import ModalRoot from './ModalRoot';

interface ModalContextProps {
  createModal: (component: ReactElement) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);

  const createModal = (component: ReactElement) => setModalContent(component);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ createModal, closeModal }}>
      {children}
      <ModalRoot modalContent={modalContent} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
