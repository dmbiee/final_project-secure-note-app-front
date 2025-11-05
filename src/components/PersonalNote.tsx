import React from 'react';
import NoteItem from './NoteItem';
import { useNotes } from '../hooks/useNote';


const PersonalNote: React.FC = () => {

    const { notesQuery, deleteNote, toggleShare } = useNotes(); 
    const { data: notes = []} = notesQuery
  return (
    <div className="flex flex-col w-5/12 h-screen gap-4 mt-6 overflow-y-auto max-h-5/6 font-jakarta">
          <p className='ml-20 text-xl text-g333'>Personal Notes</p>
          
      {notes.length > 0 ? (
  notes.map((note, index) => (
    <div className="flex row" key={index}>
          <button onClick={() => deleteNote.mutate(note.id)} className='transition-opacity duration-300 opacity-0 hover:opacity-100' >
              <img className='w-10 h-10' src="/public/trashcan.svg" alt="" />
          </button>    
          
          <NoteItem note={note} />
          
          <button onClick={() => toggleShare.mutate(note.id)} className='transition-opacity duration-300 opacity-0 hover:opacity-100' >
              <img className='w-10 h-10' src="/public/arrow.svg" alt="" />
        </button>
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

export default PersonalNote;
