import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, MessageCircle, Settings, Plus, Users } from 'lucide-react';


const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-600 rounded-lg">
        <svg className="w-6 h-6 text-purple-600 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
      
      <nav className="flex flex-col items-center space-y-6">
        <Link to="/" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Home size={20} />
        </Link>
        <Link to="/mail" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Mail size={20} />
        </Link>
        <Link to="/messages" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <MessageCircle size={20} />
        </Link>
        <Link to="/settings" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <Settings size={20} />
        </Link>
      </nav>
      
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff" 
          alt="User 1" 
          className="w-8 h-8 rounded-full"
        />
        <img 
          src="https://ui-avatars.com/api/?name=Jane+Smith&background=random&color=fff" 
          alt="User 2" 
          className="w-8 h-8 rounded-full"
        />
        <button className="flex items-center justify-center w-8 h-8 text-white bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700 rounded-full">
          <Plus size={16} />
        </button>
      </div>
      
      <Link to="/users" className="mt-auto p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <Users size={20} />
      </Link>
    </div>
  );
};

export default Sidebar;