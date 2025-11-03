import React from 'react';

export interface Note {
  title: string;
  date: string;
  owner: string;
  description: string;
}

interface Props {
  note: Note;
  onClose: () => void;
}

const NoteModal: React.FC<Props> = ({ note, onClose }) => {
  return (
    <div className="flex flex-col gap-4">
            {/* Title */}
        <h2 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
          {note.title}
        </h2>

        {/* Date & Owner */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <p>{note.date}</p>
          <span>•</span>
          <p className="flex items-center gap-1">
            <img src="/public/user.svg" alt="user" className="w-4 h-4" />
            {note.owner}
          </p>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-justify text-gray-700 whitespace-pre-wrap">
          {note.description}
        </p>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center w-8 h-8 font-bold text-gray-500 transition border-2 rounded-full top-8 right-8 hover:scale-110 hover:font-extrabold hover:text-gray-600"
        >
          ✕
        </button>
    </div>
  );
};

export default NoteModal;
