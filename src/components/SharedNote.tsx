import React from 'react';
import Note from './Note';

interface NoteType {
  title: string;
  date: string;
  description: string;
}

interface Props {
  notes: NoteType[];
}

const SharedNote: React.FC<Props> = ({ notes }) => {
  return (
    <div className="flex flex-col gap-4 font-jakarta w-4/12 h-full mt-6">
          <p className=' text-g333 text-xl ml-20'>Shared Notes</p>
          
      {notes.length > 0 ? (
  notes.map((note, index) => (
    <Note
      key={index}
      title={note.title}
      date={note.date}
      description={note.description}
    />
  ))
) : (
  <h1 className="text-g333/40 font-jakarta text-xl mt-4 mx-20">
    No notes yet 📝
  </h1>
)}
    </div>
  );
};

export default SharedNote;
