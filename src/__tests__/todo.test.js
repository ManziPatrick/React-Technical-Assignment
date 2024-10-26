import { configureStore } from '@reduxjs/toolkit';
import todosReducer, {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  clearError
} from '../features/todosSlice';

jest.mock('../config/api', () => ({
  baseURL: 'http://test.com',
  endpoints: {
    todos: '/todos',
    addTodo: '/todos',
    updateTodo: (id) => `/todos/${id}`,
    deleteTodo: (id) => `/todos/${id}`,
  }
}));

describe('todos slice', () => {
  let store;
  
  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todosReducer,
      },
    });
  });

  it('should handle initial state', () => {
    const state = store.getState().todos;
    expect(state).toEqual({
      items: [],
      status: 'idle',
      error: null
    });
  });

  it('should handle clearError', () => {
    
    store.dispatch(fetchTodos.rejected(new Error('Test error')));
   
    store.dispatch(clearError());
    const state = store.getState().todos;
    expect(state.error).toBeNull();
  });

  describe('async actions', () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should handle fetchTodos success', async () => {
      const mockTodos = [{ id: 1, title: 'Test Todo' }];
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ todos: mockTodos }),
      });

      await store.dispatch(fetchTodos());
      const state = store.getState().todos;
      
      expect(state.status).toBe('succeeded');
      expect(state.items).toEqual(mockTodos);
      expect(state.error).toBeNull();
    });

    it('should handle fetchTodos API failure', async () => {
      global.fetch.mockRejectedValueOnce(new Error('API Error'));

      await store.dispatch(fetchTodos());
      const state = store.getState().todos;

      expect(state.status).toBe('failed');
      expect(state.error).toBeTruthy();
    });

    it('should handle addTodo success', async () => {
      const newTodo = { title: 'New Todo' };
      const returnedTodo = { id: 1, ...newTodo };
      
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => returnedTodo,
      });

      await store.dispatch(addTodo(newTodo));
      const state = store.getState().todos;

      expect(state.status).toBe('succeeded');
      expect(state.items).toContainEqual(returnedTodo);
    });

    it('should handle addTodo API failure', async () => {
      global.fetch.mockRejectedValueOnce(new Error('API Error'));

      await store.dispatch(addTodo({ title: 'Failed Todo' }));
      const state = store.getState().todos;

      expect(state.status).toBe('failed');
      expect(state.error).toBeTruthy();
    });

    it('should handle updateTodo success', async () => {
      const updatedTodo = { id: 1, title: 'Updated Todo' };
      
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => updatedTodo,
      });

      await store.dispatch(updateTodo({ id: 1, updates: { title: 'Updated Todo' } }));
      const state = store.getState().todos;

      expect(state.status).toBe('succeeded');
      expect(state.error).toBeNull();
    });

    it('should handle updateTodo API failure', async () => {
      global.fetch.mockRejectedValueOnce(new Error('API Error'));

      await store.dispatch(updateTodo({ id: 1, updates: { title: 'Update Failed' } }));
      const state = store.getState().todos;

      expect(state.status).toBe('failed');
      expect(state.error).toBeTruthy();
    });

    it('should handle deleteTodo success', async () => {
     
      store.dispatch(addTodo.fulfilled({ id: 1, title: 'Todo to Delete' }));
      
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: 1 }),
      });

      await store.dispatch(deleteTodo(1));
      const state = store.getState().todos;

      expect(state.status).toBe('succeeded');
      expect(state.items).not.toContainEqual(expect.objectContaining({ id: 1 }));
    });

    it('should handle deleteTodo API failure', async () => {
      global.fetch.mockRejectedValueOnce(new Error('API Error'));

      await store.dispatch(deleteTodo(1));
      const state = store.getState().todos;

      expect(state.status).toBe('failed');
      expect(state.error).toBeTruthy();
    });
  });
  it('should handle non-200 responses', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    });

    await store.dispatch(fetchTodos());
    const state = store.getState().todos;
    
    expect(state.status).toBe('failed');
    expect(state.error).toBeTruthy();
  });

  it('should handle network errors', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'));

    await store.dispatch(fetchTodos());
    const state = store.getState().todos;
    
    expect(state.status).toBe('failed');
    expect(state.error).toBeTruthy();
  });

  it('should handle a sequence of actions', async () => {
  
    store.dispatch(addTodo.fulfilled({ id: 1, title: 'Test Todo' }));
    
    store.dispatch(updateTodo.fulfilled({ id: 1, title: 'Updated Todo' }));
    
    store.dispatch(deleteTodo.fulfilled({ id: 1 }));
    
    const state = store.getState().todos;
    expect(state.items).toHaveLength(0);
    expect(state.status).toBe('succeeded');
  });
});