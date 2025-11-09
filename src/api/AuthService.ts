import type { NavigateFunction } from "react-router-dom";
import type { LoginRequest, RegisterRequest } from "../assets/types";
import axios, { AxiosError } from "axios";


const API_URL = "http://localhost:8080/api/auth";


const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const AuthService = {

  async login(login: LoginRequest) {
    const response = await api.post("/login", login)
    return response.data;
  },

  async register(register: RegisterRequest) {
    const response = await api.post("/register", register)
    return response.data;
  },

  async checkAuthorization(navigate: NavigateFunction) {
    try {
      const response = await api.get("/check")
      if (response.status != 200) {
        navigate("/login")
      }
      return response.data

    } catch (error) {
      const AxiosError = error as AxiosError
      if (AxiosError.response && AxiosError.response.status === 403) {
        navigate("/login")
      }
    }
  },

  async logout(navigate: NavigateFunction) {
    try {
      const response = await api.get("/logout")
      if (response.status == 200) {
        navigate("/login")
      }
      return response.data

    } catch (error) {
      const AxiosError = error as AxiosError
      if (AxiosError.response && AxiosError.response.status === 403) {
        navigate("/login")
      }
    }


  }

}