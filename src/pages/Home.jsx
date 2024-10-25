import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../api/tasks.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from '../features/todos/todosSlice';
import TaskList from '../components/TaskList.jsx';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import Chat from '../components/TaskChart.jsx';  

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    dispatch(addTodo({ todo, completed: false, userId: 1 }));
    event.target.reset();
  };

  if (error) return <div>{t('error')}: {error.message}</div>;

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold">{t('websiteDesign')}</h1>
      <TaskList tasks={tasks} />
      
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <MessageCircle size={24} />
      </button>

      <Chat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default Dashboard;