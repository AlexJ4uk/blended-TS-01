import axios from "axios";

import type { User } from "./type/user.type.ts";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();