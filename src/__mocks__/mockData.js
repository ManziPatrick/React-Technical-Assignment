
export const mockTodos = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true }
  ];
  
  export const mockInitialState = {
    todos: {
      items: [],
      status: 'idle',
      error: null
    }
  };
  
  export const mockLoadedState = {
    todos: {
      items: mockTodos,
      status: 'succeeded',
      error: null
    }
  };