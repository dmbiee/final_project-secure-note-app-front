import React from 'react';
import NoteItem from './NoteItem';
import type { Note } from '../assets/types';




interface Props {
  title: string;
  notes: Note[];

}
const AvailableNotes: React.FC<Props> = ({title, notes}) => {
  
  
  return (
    <div className="flex flex-col w-4/12 h-screen gap-4 mt-6 overflow-y-auto max-h-5/6 font-jakarta">
          <p className='ml-20 text-xl text-g333'>{title}</p>
          
      {notes.length > 0 ? (
  notes.map((note, index) => (
    <NoteItem
      key={index}
      note={note}
    />
  ))
) : (
  <h1 className="mx-20 mt-4 text-xl text-g333/40 font-jakarta">
    No notes yet 📝
  </h1>
)}
    </div>
  );
};

export default AvailableNotes;
