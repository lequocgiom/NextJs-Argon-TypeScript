
export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};

export type LoginResponse = {
  token: string,
  expired: number
}