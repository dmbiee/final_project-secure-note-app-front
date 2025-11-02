import type { NavigateFunction } from "react-router-dom";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include", 
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Login failed");
  }

  return response.json();
};

export interface RegisterRequest {
  username: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
}

const API_URL = "http://localhost:8080/api/auth";

export const authService = {
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Register Error");
    }

    return response.json();
  },
};

export async function checkAuthorization(navigate: NavigateFunction) {
  try {
    const res = await fetch("http://localhost:8080/api/auth/check", {
      method: "GET",
      credentials: "include",
    });

    if (res.status === 403) {
      navigate("/login");
    }

  } catch {
    navigate("/login");
  }
}