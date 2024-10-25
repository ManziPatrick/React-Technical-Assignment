import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todosSlice";
import { useTranslation } from 'react-i18next';
import { Trash, Star, MoreVertical, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const TaskCard = ({ task, darkMode }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleComplete = (id, completed) => {
    dispatch(updateTodo({ id, updates: { completed: !completed } }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id, task.completed)}
            className="hidden"
            id={`task-${task.id}`}
          />
          <label 
            htmlFor={`task-${task.id}`}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              task.completed 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
            }`}
          >
            {task.completed ? t('completed') : t('inProgress')}
          </label>
        </div>
        
        <div className="relative">
          <button 
            onClick={toggleMenu}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-400 dark:text-gray-300" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-10 border dark:border-gray-700">
              <button
                onClick={() => handleDelete(task.id)}
                className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                <Trash className="w-4 h-4" />
                {t('delete')}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{task.todo}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-600 dark:text-gray-300"
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{task.userId}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
           
            
            <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <MessageCircle size={18} />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 dark:text-gray-500 text-sm">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;