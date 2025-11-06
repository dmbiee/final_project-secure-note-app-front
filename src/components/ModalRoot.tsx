import React, { type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalRootProps {
  modalContent: ReactElement | null;
  onClose: () => void;
}

const ModalRoot: React.FC<ModalRootProps> = ({ modalContent, onClose }) => {
  return (
    <AnimatePresence>
      {modalContent && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute w-5/12 p-10 bg-white rounded-xl h-2/3 min-h-[670px]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalRoot;
