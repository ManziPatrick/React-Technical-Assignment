import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Mail, MessageCircle, Settings, Plus, Users } from 'lucide-react';
import logoa from "../assets/infinity.png"
const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-600 rounded-lg">
      <img src={logoa}/>
      </div>
      
      <nav className="flex flex-col items-center w-full space-y-6">
        <Link
          to="/"
          className={`relative flex items-center justify-center w-full p-2 ${isActive('/') ? 'bg-gradient-to-r from-blue-500/90 via-blue-500/30 to-white border-l-4 border-blue-500' : ''}`}
        >
          <Home size={20} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
        </Link>
        <Link
          to="/mail"
          className={`relative flex items-center justify-center w-full p-2 ${isActive('/mail') ? 'bg-gradient-to-r from-blue-500/90 via-blue-500/30 to-white border-l-4 border-blue-500' : ''}`}
        >
          <Mail size={20} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
        </Link>
        <Link
          to="/messages"
          className={`relative flex items-center justify-center w-full p-2 ${isActive('/messages') ? 'bg-gradient-to-r from-blue-500/90 via-blue-500/30 to-white border-l-4 border-blue-500' : ''}`}
        >
          <MessageCircle size={20} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
        </Link>
        <Link
          to="/settings"
          className={`relative flex items-center justify-center w-full p-2 ${isActive('/settings') ? 'bg-gradient-to-r from-blue-500/90 via-blue-500/30 to-white border-l-4 border-blue-500' : ''}`}
        >
          <Settings size={20} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
        </Link>
      </nav>
      <div className='bg-slate-600 w-full h-[1px]'></div>
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
      <div className='bg-slate-600 w-full h-[1px]'></div>
      <Link
        to="/users"
        className={`relative flex items-center justify-center w-full mt-auto p-2 ${isActive('/users') ? 'bg-gradient-to-r from-blue-500/90 via-blue-500/30 to-white border-l-4 border-blue-500' : ''}`}
      >
        <Users size={20} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
      </Link>
    </div>
  );
};

export default Sidebar;
