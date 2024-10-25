import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data.map((task) => ({
    id: task.id,
    title: task.title,
    status: task.completed ? 'completed' : Math.random() > 0.5 ? 'inProgress' : 'todo',
    assignees: [Math.floor(Math.random() * 100)],
    comments: Math.floor(Math.random() * 5),
  }));
};

export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (task) => {
  const response = await axios.put(`${API_URL}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};