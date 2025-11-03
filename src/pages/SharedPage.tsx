import React from "react";
import SharedNote from "../components/SharedNote";
import AvailableNotes from "../components/AvailableNotes";
import type { Note } from "../assets/types";
import { useNotes } from "../components/NotesContext";


interface NoteType {
    id: string;
  owner: string;
  title: string;
  date: string;
  description: string;
}



const SharedPage = () => {
        const { state, dispatch } = useNotes();
  const notesByOwner: { [owner: string]: NoteType[] } = {};
    const notes:Note[] = state.availableNotes
    
  notes.forEach((note) => {
    if (!notesByOwner[note.owner]) notesByOwner[note.owner] = [];
    notesByOwner[note.owner].push(note);
  });

  return (
    <div className="flex w-full gap-5 p-6 overflow-x-hidden row">
      {Object.keys(notesByOwner).map((owner) => (
        <AvailableNotes  key={owner} title={owner} notes={notesByOwner[owner]} />
      ))}
    </div>
  );
};

export default SharedPage;
