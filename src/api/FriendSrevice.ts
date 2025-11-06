import axios from "axios";

const API_URL = "http://localhost:8080/api/friends";

export interface Friend {
  id: number;
  user: string;
  friend: string;
}

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const FriendService = {
  async getMyFriends(): Promise<Friend[]> {
    const response = await api.get("");
    return response.data;
  },

  async getWhoAddedMe(): Promise<Friend[]> {
    const response = await api.get("/who-added-me");
    return response.data;
  },

  async addFriend(friendUsername: string): Promise<Friend> {
    const response = await api.post(`/${friendUsername}`);
    return response.data;
  },

  async deleteFriend(friendUsername: string): Promise<void> {
    await api.delete(`/${friendUsername}`);
  },
};
