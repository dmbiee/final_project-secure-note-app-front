import React from "react";
import SharedNote from "../components/SharedNote";


interface NoteType {
  owner: string;
  title: string;
  date: string;
  description: string;
}



const SharedPage: React.FC<{ notes: NoteType[] }> = ({ notes }) => {
  const notesByOwner: { [owner: string]: NoteType[] } = {};

  notes.forEach((note) => {
    if (!notesByOwner[note.owner]) notesByOwner[note.owner] = [];
    notesByOwner[note.owner].push(note);
  });

  return (
    <div className="flex w-full gap-5 p-6 overflow-x-hidden row">
      {Object.keys(notesByOwner).map((owner) => (
        <SharedNote key={owner} title={owner} notes={notesByOwner[owner]} />
      ))}
    </div>
  );
};

export default SharedPage;
