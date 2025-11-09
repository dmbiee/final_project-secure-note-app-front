import React from 'react';
import NoteItem from './NoteItem';
import { useNotes } from '../hooks/useNote';



const SharedNote: React.FC = () => {
  
  const { notesQuery, toggleShare } = useNotes();
  const { data: notes = [] } = notesQuery;
  
  const sharedNotes = notes.filter(note => note.isShared === true);

  return (
    <div className="flex flex-col w-4/12 h-screen gap-4 mt-6 overflow-y-auto max-h-5/6 font-jakarta">
          <p className='ml-20 text-xl text-g333'>Shared notes</p>
          
      {sharedNotes?.filter(note => note.isShared).length > 0 ? (
  sharedNotes.filter(note => note.isShared).map((note, index) => (
    <div className="flex row">
      <button onClick={() => {toggleShare.mutate(note.id)}} className='transition-opacity duration-300 opacity-0 hover:opacity-100'>
      <img src="../../public/arrow.svg" className='w-10 h-10 rotate-180' alt="" /> 
      </button>
    
    <NoteItem
      key={index}
      note={note}
      />
      </div>
  ))
) : (
  <h1 className="mx-20 mt-4 text-xl text-g333/40 font-jakarta">
    No notes yet 📝
  </h1>
)}
    </div>
  );
};

export default SharedNote;
