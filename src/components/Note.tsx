import React from 'react';
import { useModal } from './ModalProvider';
import NoteModal from './NoteModal';

interface Props {
    note: {   
        title: string,
        date: string,
        owner: string,
        description: string
    }
}

const Note: React.FC<Props> = ({ note }) => {
    
    const { createModal, closeModal } = useModal();
  return (

      <div onClick={() => createModal(<NoteModal note={note} onClose={closeModal}/>)} className='w-full p-5 transition-all bg-white border rounded-xl border-black/10 hover:bg-p250 hover:border-p500'>
      <h3 className='text-g333 '>{note.title}</h3>
      <p className='text-gray-500'>{note.date}</p>
      <p className='mt-5 text-gray-600 line-clamp-5'>{note.description}</p>
    </div>
  );
};

export default Note;