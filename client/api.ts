import axios from "axios";

interface BODY {
  description: string;
}

const BASE_URL = "http://localhost:5500/api/todos";

export const getTodos = async () => {
  const response = await axios.get(`${BASE_URL}/`);

  return response.data;
};

export const addTodos = async (body: BODY) => {
  const response = await axios.post(`${BASE_URL}/create`, body);

  return response.data;
};

export const updateTodos = async ({ body, id }: { body: BODY; id: number }) => {
  const response = await axios.put(`${BASE_URL}/update/${id}`, body);

  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/delete/${id}`);

  return response.data;
};
