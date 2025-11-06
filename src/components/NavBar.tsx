import React from 'react'
import Button from './Button'
import AddNote from './AddNote'
import { useModal } from './ModalProvider';
import AddNoteModal from './AddNoteModal';
import AddFriend from './AddFriend';
import AddFriendModal from './AddFriendModal';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '../hooks/useNote';
import { logout } from '../api/AuthService';


const NavBar = () => {
  const { createModal, closeModal } = useModal();
  const navigate = useNavigate();

const { notesQuery } = useNotes();
  const { data: notes = [] } = notesQuery;

  const lengthPersonal = notes.length;
  const lengthShared = notes.filter(note => note.isShared).length;
  



  return (
      <div className='flex items-center justify-around w-full h-20 bg-white '>
      <Button onClick={() => {navigate('/main/home')}} mainText='Personal note' subText={lengthPersonal + ' notes'}></Button>
      <Button onClick={() => {navigate('/main/shared')}} mainText='Shared note' subText={lengthShared + ' notes'}></Button>
      <AddFriend onClick={() => createModal(<AddFriendModal onClose={closeModal} />)}></AddFriend>
      <AddNote onClick={() => createModal(<AddNoteModal onClose={closeModal} />)}></AddNote>
      <button onClick={() => logout(navigate)} className='fixed w-10 h-10 transition-all duration-200 top-5 right-5 opacity-10 hover:opacity-40 hover:scale-105'> <img src="../../public/logout.svg" alt="" /></button>
      </div>
  )
}

export default NavBar