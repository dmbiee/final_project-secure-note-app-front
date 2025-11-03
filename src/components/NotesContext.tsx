import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import type { NotesState, NotesAction, Friend, Note } from '../assets/types';

const initialState: NotesState = {
  personalNotes: [],
  sharedNotes: [],
  availableNotes: [],
  friends: [],
};

const NotesContext = createContext<{
  state: NotesState;
  dispatch: React.Dispatch<NotesAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

function notesReducer(state: NotesState, action: NotesAction): NotesState {
  switch (action.type) {
    case 'SET_PERSONAL':
      return { ...state, personalNotes: action.payload };
    case 'SET_SHARED':
      return { ...state, sharedNotes: action.payload };
    case 'SET_AVAILABLE':
      return { ...state, availableNotes: action.payload };
    case 'SET_FRIENDS':
      return { ...state, friends: action.payload };
    case 'ADD_NOTE':
      if (action.list === 'personal') return { ...state, personalNotes: [...state.personalNotes, action.payload] };
      if (action.list === 'shared') return { ...state, sharedNotes: [...state.sharedNotes, action.payload] };
      return { ...state, availableNotes: [...state.availableNotes, action.payload] };
    case 'REMOVE_NOTE':
      if (action.list === 'personal') return { ...state, personalNotes: state.personalNotes.filter(n => n.id !== action.payload) };
      if (action.list === 'shared') return { ...state, sharedNotes: state.sharedNotes.filter(n => n.id !== action.payload) };
      return { ...state, availableNotes: state.availableNotes.filter(n => n.id !== action.payload) };
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.payload] };
    case 'REMOVE_FRIEND':
      return { ...state, friends: state.friends.filter(f => f.name !== action.payload) };
    default:
      return state;
  }
}

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(NotesContext);
