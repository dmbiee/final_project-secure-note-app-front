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

const mockNotes: Note[] = [
  {
    id: 1,
    title: "Learn React Basics",
    description:
      "Study the fundamentals of React including components, props, and state management. Try building a small to-do app.",
    owner: "dmbiee",
    date: "2025-11-03",
    isShared: false,
  },
  {
    id: 2,
    title: "Grocery List",
    description:
      "Buy milk, bread, eggs, and some vegetables. Don’t forget to check if there’s any coffee left.",
    owner: "yana",
    date: "2025-11-02",
    isShared: true,
  },
  {
    id: 3,
    title: "Shared Project Ideas",
    description:
      "Brainstorm ideas for a collaborative app project. Maybe something with real-time updates or a social feature.",
    owner: "gabriel",
    date: "2025-11-01",
    isShared: true,
  },
  {
    id: 4,
    title: "Rust Practice Notes",
    description:
      "Write small programs in Rust every day. Focus on ownership, borrowing, and concurrency concepts.",
    owner: "dmbiee",
    date: "2025-10-31",
    isShared: false,
  },
  {
    id: 5,
    title: "Vacation Plan",
    description:
      "Plan a week-long vacation to Asturias. Check for good hiking routes and local food recommendations.",
    owner: "yana",
    date: "2025-10-30",
    isShared: false,
  },
];

const SharedPage = () => {
        const { state, dispatch } = useNotes();
  const notesByOwner: { [owner: string]: Note[] } = {};
    const notes: Note[] = mockNotes;
    
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
