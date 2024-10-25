import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import todosReducer, {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../features/todosSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('todos slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        items: [],
        status: 'idle',
        error: null,
      }
    });
    
    fetch.resetMocks();
  });

  describe('fetchTodos', () => {
    it('should handle successful todos fetch', async () => {
      const mockTodos = {
        todos: [
          { id: 1, text: 'Test Todo', completed: false },
          { id: 2, text: 'Another Todo', completed: true },
        ],
      };

      fetch.mockResponseOnce(JSON.stringify(mockTodos));

      await store.dispatch(fetchTodos());

      const actions = store.getActions();
      
      expect(actions[0].type).toBe(fetchTodos.pending.type);
      expect(actions[1].type).toBe(fetchTodos.fulfilled.type);
      expect(actions[1].payload).toEqual(mockTodos);
    });

    it('should handle failed todos fetch', async () => {
      const errorMessage = 'Failed to fetch todos';
      
      fetch.mockRejectOnce(new Error(errorMessage));

      await store.dispatch(fetchTodos());

      const actions = store.getActions();

      expect(actions[0].type).toBe(fetchTodos.pending.type);
      expect(actions[1].type).toBe(fetchTodos.rejected.type);
      expect(actions[1].payload).toBe(errorMessage);
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(
        todosReducer(undefined, { type: 'unknown' })
      ).toEqual({
        items: [],
        status: 'idle',
        error: null,
      });
    });

    it('should handle pending state', () => {
      const actual = todosReducer({
        items: [],
        status: 'idle',
        error: null,
      }, fetchTodos.pending());
      
      expect(actual.status).toBe('loading');
      expect(actual.error).toBeNull();
    });

    it('should handle fulfilled state', () => {
      const mockTodos = {
        todos: [{ id: 1, text: 'Test Todo', completed: false }],
      };

      const actual = todosReducer({
        items: [],
        status: 'loading',
        error: null,
      }, {
        type: fetchTodos.fulfilled.type,
        payload: mockTodos,
      });

      expect(actual.status).toBe('succeeded');
      expect(actual.items).toEqual(mockTodos.todos);
      expect(actual.error).toBeNull();
    });
  });
});