const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://dummyjson.com',
  endpoints: {
    todos: '/todos',
    addTodo: '/todos/add',
    updateTodo: (id) => `/todos/${id}`,
    deleteTodo: (id) => `/todos/${id}`,
  }
};

export default API_CONFIG;