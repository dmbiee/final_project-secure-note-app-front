import React from 'react'
import Button from './Button'
import AddNote from './AddNote'
import { useModal } from './ModalProvider';
import AddNoteModal from './AddNoteModal';
import AddFriend from './AddFriend';
import AddFriendModal from './AddFriendModal';
import { useNavigate } from 'react-router-dom';
import { useNotes } from './NotesContext';


const NavBar = () => {
  const { createModal, closeModal } = useModal();
  const navigate = useNavigate();
  const { state, dispatch } = useNotes();

  const lengthPersonal = state.personalNotes.length;
  const lengthShared = state.sharedNotes.length;
  



  return (
      <div className='flex items-center justify-around w-full h-20 bg-white '>
      <Button onClick={() => {navigate('/main/home')}} mainText='Personal note' subText={lengthPersonal + ' notes'}></Button>
      <Button onClick={() => {navigate('/main/shared')}} mainText='Shared note' subText={lengthShared + ' notes'}></Button>
      <AddFriend onClick={() => createModal(<AddFriendModal onClose={closeModal} />)}></AddFriend>
      <AddNote onClick={() => createModal(<AddNoteModal onClose={closeModal}/>)}></AddNote>
      </div>
  )
}

export default NavBar