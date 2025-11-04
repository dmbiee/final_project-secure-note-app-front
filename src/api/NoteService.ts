// src/services/NoteService.ts
import axios from "axios";
import type { Note } from "../assets/types";

const API_URL = "http://localhost:8080/api/notes"; // 👈 має збігатися з @RequestMapping

export const NoteService = {
  // Отримати всі нотатки користувача
  getAllNotes: async (): Promise<Note[]> => {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  },

  // Створити нову нотатку
  createNote: async (note: Omit<Note, 'id' | 'owner' | 'date' | 'isShared'>): Promise<Note> => {
    const response = await axios.post(API_URL, note, { withCredentials: true });
    return response.data;
  },

  // Оновити нотатку
  updateNote: async (id: number, updatedNote: Note): Promise<Note> => {
    const response = await axios.put(`${API_URL}/${id}`, updatedNote, {
      withCredentials: true,
    });
    return response.data;
  },

  // Видалити нотатку
  deleteNote: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
  },

  // Отримати всі "shared" нотатки
  getSharedNotes: async (): Promise<Note[]> => {
    const response = await axios.get(`${API_URL}/shared`, {
      withCredentials: true,
    });
    return response.data;
  },

  // Перемкнути статус "shared" у нотатки
  toggleShare: async (id: number): Promise<Note> => {
    const response = await axios.put(`${API_URL}/${id}/share`, {}, {
      withCredentials: true,
    });
    return response.data;
  },
};
