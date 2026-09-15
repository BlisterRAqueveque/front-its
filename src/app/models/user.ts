export interface User extends Login {
  name: string;
  last_name: string;
}

export interface Login {
  username: string;
  password: string;
}
