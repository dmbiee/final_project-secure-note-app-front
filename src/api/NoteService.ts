import axios from 'axios';
import type { Note } from '../assets/types';

const API_URL = 'http://localhost:8080/api/notes';

export const NoteService = {

  async getNotes(): Promise<Note[]> {
    const res = await axios.get(API_URL, { withCredentials: true });
    return res.data;
  },

  async create(note: Omit<Note, 'id' | 'date' | 'owner' | 'isShared'>): Promise<Note> {
    const res = await axios.post(API_URL, note, { withCredentials: true });
    return res.data;
  },

  async update(id: number, note: Partial<Note>): Promise<Note> {
    const res = await axios.put(`${API_URL}/${id}`, note, { withCredentials: true });
    return res.data;
  },

  async remove(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
  },

  async toggleShare(id: number): Promise<Note> {
      const res = await axios.put(`${API_URL}/${id}/share`, {}, { withCredentials: true });
    return res.data;
  },

  async getShared(): Promise<Note[]> {
      const res = await axios.get(`${API_URL}/shared`, { withCredentials: true });
    return res.data;
  },

    async getAwailable(): Promise<Note[]>{
        const res = await axios.get(`${API_URL}/awailable`, { withCredentials: true });
        return res.data;
  }
};
