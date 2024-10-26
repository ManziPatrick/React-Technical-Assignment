import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from '../features/todosSlice';
import { Plus } from 'lucide-react';
import firter from "../assets/filter.png"
import TaskCard from './TaskCard';
import { useTranslation } from 'react-i18next';
import { TaskManagementSkeleton } from '../../skeleton/homeSkeleton';
import Header from "./TaskStats"
const TaskList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.items);
  const taskStatus = useSelector((state) => state.todos.status);
  
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTodos());
    }
  }, [taskStatus, dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (taskStatus === 'loading') {
    return <TaskManagementSkeleton />;
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      dispatch(addTodo({
        todo: newTask,
        completed: false,
        userId: 1,
      }));
      setNewTask('');
      setShowInput(false);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'todo':
        return !task.completed && !task.inProgress;
      case 'inProgress':
        return task.inProgress;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const filterOptions = [
    { id: 'all', label: t('all') },
    { id: 'todo', label: t('todo') },
    { id: 'inProgress', label: t('inProgress') },
    { id: 'completed', label: t('completed') }
  ];

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 min-h-screen  ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
      <Header/>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleFilterChange(option.id)}
                  className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                    ${filter === option.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500'}
                    transition-colors duration-150 ease-in-out
                  `}
                >
                  {option.label}
                  <span className="ml-2 text-xs">
                    ({tasks.filter((task) => {
                      if (option.id === 'all') return true;
                      if (option.id === 'todo') return !task.completed && !task.inProgress;
                      if (option.id === 'inProgress') return task.inProgress;
                      if (option.id === 'completed') return task.completed;
                      return false;
                    }).length})
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4">
              <button
                type="button"
                className={`
                  flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                  bg-gray-50 text-gray-600 hover:bg-gray-100 
                  dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600
                  transition-colors duration-150 ease-in-out gap-2
                `}
              >
                <img src={firter} alt="" className="w-4 h-4" />
                <span className="whitespace-nowrap">{t('Filter & sort')}</span>
              </button>
              
              {showInput ? (
                <form onSubmit={handleAddTask} className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder={t('newTask')}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-gray-600
                               dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:placeholder-gray-400
                               w-full sm:w-auto"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                      bg-gray-50 text-gray-600 hover:bg-gray-100 
                      dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600
                      transition-colors duration-150 ease-in-out gap-2"
                  >
                    {t('addTask')}
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setShowInput(true)}
                  className="flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                    bg-gray-50 text-gray-600 hover:bg-gray-100 
                    dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600
                    transition-colors duration-150 ease-in-out gap-2"
                >
                  <Plus size={18} />
                  <span className="whitespace-nowrap">{t('newTask')}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} darkMode={darkMode} isLoading={taskStatus === 'loading'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
