// auth.service.ts
import { api } from "../api";
import { Credentials, LoginResponse, User } from "./type";

// Sign in
export const login = async (credentials: Credentials): Promise<LoginResponse> => {
  const data = await api.post<Credentials, LoginResponse>("/auth/login", credentials);
  return data;
};
// Get logged user
export const me = async (): Promise<User> => {
  const { data } = await api.post<User>("/auth/me");
  return data;
};
