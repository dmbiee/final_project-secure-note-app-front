import axios from 'axios';
import type { Note } from '../assets/types';

const API_BASE_URL = 'http://localhost:8080/api/notes'; // або твій бекенд-URL

// Створюємо інстанс axios з налаштуваннями
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // якщо використовуєш cookie/JWT у header
});

export const NoteService = {
  // Отримати всі нотатки поточного користувача
  async getAllNotes(): Promise<Note[]> {
    const response = await api.get<Note[]>('/');
    return response.data;
  },

  // Створити нову нотатку
  async createNote(note: Omit<Note, 'id' | 'owner' | 'date' | 'isShared'>): Promise<Note> {
    const response = await api.post<Note>('/', note);
    return response.data;
  },

  // Оновити існуючу нотатку
  async updateNote(id: number, updatedNote: Partial<Note>): Promise<Note> {
    const response = await api.put<Note>(`/${id}`, updatedNote);
    return response.data;
  },

  // Видалити нотатку
  async deleteNote(id: number): Promise<void> {
    await api.delete(`/${id}`);
  },

  // Отримати всі нотатки, які є спільними (shared)
  async getSharedNotes(): Promise<Note[]> {
    const response = await api.get<Note[]>('/shared');
    return response.data;
  },

  // Перемкнути статус "shared"
  async toggleShare(id: number): Promise<Note> {
    const response = await api.put<Note>(`/${id}/share`);
    return response.data;
  },
};
