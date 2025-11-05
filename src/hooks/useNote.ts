import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { NoteService } from '../api/NoteService';
import type { Note } from '../assets/types';

export function useNotes() {
  const queryClient = useQueryClient();

  const notesQuery = useQuery({
    queryKey: ['notes'],
    queryFn: NoteService.getNotes,
  });

  const addNote = useMutation({
    mutationFn: NoteService.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  const updateNote = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Note> }) =>
      NoteService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  const deleteNote = useMutation({
    mutationFn: NoteService.remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  const toggleShare = useMutation({
    mutationFn: NoteService.toggleShare,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  return {
    notesQuery,
    addNote,
    updateNote,
    deleteNote,
      toggleShare,
    
  };
}
