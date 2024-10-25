import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../src/features/todosSlice";

import { useTranslation } from 'react-i18next';
import { Trash } from 'lucide-react';


export const TaskCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4">
      <Skeleton className="mb-2 h-6" /> 
      <Skeleton className="mb-4 w-1/3" /> 
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton circle className="h-5 w-5" /> 
          <Skeleton className="w-20" /> 
        </div>
        <Skeleton circle className="h-8 w-8" /> 
      </div>
    </div>
  );
};

const TaskCard = ({ task, darkMode, isLoading }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (isLoading) {
    return <TaskCardSkeleton />;
  }

  const handleToggleComplete = (id, completed) => {
    dispatch(updateTodo({ id, updates: { completed: !completed } }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 ${darkMode ? 'dark' : ''}`}>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">
        {task.todo}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        User ID: {task.userId}
      </p>
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id, task.completed)}
            className="mr-2 form-checkbox h-5 w-5 text-indigo-600 dark:text-indigo-500"
          />
          <span 
            className={task.completed ? "text-green-500 dark:text-green-400" : "text-yellow-500 dark:text-yellow-400"}
          >
            {task.completed ? t('completed') : t('inProgress')}
          </span>
        </label>
        <button
          onClick={() => handleDelete(task.id)}
          className="text-black dark:bg-red-600 dark:hover:bg-red-700 p-2 rounded-full transition-colors duration-150 ease-in-out"
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
};

export const TaskManagementSkeleton = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-32" /> 
              <Skeleton className="h-8 w-28" /> 
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <TaskCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;