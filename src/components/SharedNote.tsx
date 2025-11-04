import React from 'react';
import NoteItem from './NoteItem';
import type { Note } from '../assets/types';
import { useNotes } from './NotesContext';
import { NoteService } from '../api/NoteService';



interface Props {
  title: string;
  notes: Note[];

}
const SharedNote: React.FC<Props> = ({title}) => {
  
  const { state, dispatch } = useNotes();
  return (
    <div className="flex flex-col w-4/12 h-screen gap-4 mt-6 overflow-y-auto max-h-5/6 font-jakarta">
          <p className='ml-20 text-xl text-g333'>{title}</p>
          
      {state.sharedNotes.length > 0 ? (
  state.sharedNotes.map((note, index) => (
    <div className="flex row">
      <button onClick={() => { dispatch({ type: "REMOVE_NOTE", list: "shared", payload: note.id.toString() });  NoteService.toggleShare(note.id)}} className='transition-opacity duration-300 opacity-0 hover:opacity-100'>
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
