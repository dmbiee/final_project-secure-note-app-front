import React from "react";
import { useModal } from "./ModalProvider";
import NoteModal from "./NoteModal";
import type { Note } from "../assets/types";

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { createModal, closeModal } = useModal();
  return (
    <div
      onClick={() =>
        createModal(<NoteModal note={note} onClose={closeModal} />)
      }
      className="w-full p-5 transition-all bg-white border rounded-xl border-black/10 hover:bg-p250 hover:border-p500"
    >
      <h3 className="text-g333 ">{note.title}</h3>
      <p className="text-gray-500">
        {new Date(note.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })}
      </p>
      <p className="mt-5 text-gray-600 line-clamp-5">{note.description}</p>
    </div>
  );
};

export default NoteItem;
