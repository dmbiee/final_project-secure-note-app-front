import React from 'react'
import Button from './Button'
import AddNote from './AddNote'
import { useModal } from './ModalProvider';
import AddNoteModal from './AddNoteModal';

const NavBar = () => {
      const { createModal, closeModal } = useModal();
  return (
      <div className='flex items-center justify-around w-full h-20 bg-white '>
      <Button mainText='Personal note' subText='3 notes'></Button>
      <Button mainText='Shared note' subText='3 notes'></Button>
      <AddNote onClick={() => createModal(<AddNoteModal onClose={closeModal}/>)}></AddNote>
      </div>
  )
}

export default NavBar