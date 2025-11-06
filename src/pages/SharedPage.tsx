import React, { useEffect } from "react";
import AvailableNotes from "../components/AvailableNotes";
import type { Note } from "../assets/types";
import { useNavigate } from "react-router-dom";
import { checkAuthorization } from "../api/AuthService";
import { NoteService } from "../api/NoteService";

const SharedPage = () => {
    
      const navigate = useNavigate();

  useEffect(() => {

      checkAuthorization(navigate);

  }, [navigate]);
    
    
  const notesByOwner: { [owner: string]: Note[] } = {};
  const [notes, setNotes] = React.useState<Note[]>([]);

  useEffect(() => {
    NoteService.getAwailable().then((fetchedNotes) => {
      setNotes(fetchedNotes);
    });
  }, []);

  notes.forEach((note) => {
    if (!notesByOwner[note.owner]) notesByOwner[note.owner] = [];
    notesByOwner[note.owner].push(note);
  });

  return (
    <div className="flex w-full gap-5 p-6 overflow-x-hidden row">
      {Object.keys(notesByOwner).map((owner) => (
        <AvailableNotes  key={owner} title={owner} notes={notesByOwner[owner]} />
      ))}
        {notes.length === 0 && <p className="m-auto text-xl text-g333/40">No notes yet 📝</p>}
    </div>
  );
};

export default SharedPage;
