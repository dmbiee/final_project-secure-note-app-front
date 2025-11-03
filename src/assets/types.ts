export interface Note {
  id: string;
  title: string;
  description: string;
  date: string;
  owner: string;
}

export interface NoteRequest {
    title: string;
    description: string;
}

export interface Friend {
  name: string;
}

export interface NotesState {
  personalNotes: Note[];
  sharedNotes: Note[];
  availableNotes: Note[];
  friends: Friend[];
}

export type NotesAction =
  | { type: 'SET_PERSONAL'; payload: Note[] }
  | { type: 'SET_SHARED'; payload: Note[] }
  | { type: 'SET_AVAILABLE'; payload: Note[] }
  | { type: 'SET_FRIENDS'; payload: Friend[] }
  | { type: 'ADD_NOTE'; list: 'personal' | 'shared' | 'available'; payload: Note }
  | { type: 'REMOVE_NOTE'; list: 'personal' | 'shared' | 'available'; payload: string }
  | { type: 'ADD_FRIEND'; payload: Friend }
  | { type: 'REMOVE_FRIEND'; payload: string }; // payload = friend id
