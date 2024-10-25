import React, { useState } from 'react';
import { Link2, ChevronDown, Copy } from 'lucide-react';

const WebsiteHeader = () => {
  const [showTooltip, setShowTooltip] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  
  const collaborators = [
    { id: 1, name: 'Sarah Wilson', bgColor: 'bg-blue-500' },
    { id: 2, name: 'Mike Chen', bgColor: 'bg-green-500' },
    { id: 3, name: 'Alex Kim', bgColor: 'bg-purple-500' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className='flex justify-between'>
        <div className="py-2 text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
          <span>Workspace</span>
          <span className="mx-2">/</span>
          <span>Creative Website</span>
        </div>
        <div>
        <div className="text-sm py-2 text-gray-500 dark:text-gray-400">Updated 12 min ago</div>
        </div>
        </div>
          <div>
              <h1 className="text-xl  font-semibold text-gray-900 dark:text-white">Website Design</h1>
              
            </div> 
        <div className="py-4 flex flex-wrap items-center justify-between gap-4">
       
          <div className="flex items-start gap-4">
          
            <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-md">
              <span>Limited access</span>
              <ChevronDown size={16} />
            </button>
            <div className="flex -space-x-2">
              {collaborators.map(({id, name, bgColor}) => (
                <div key={id} onMouseEnter={() => setShowTooltip(id)} onMouseLeave={() => setShowTooltip(null)} className="relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${bgColor} border-2 border-white dark:border-gray-900`}>
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {showTooltip === id && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-black dark:bg-white text-white dark:text-black rounded">
                      {name}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 border-2">+</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            
            <div className="flex items-center gap-2">
              <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-md">
                <Link2 size={16} />
                <span>Copy Link</span>
              </button>
              <button className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md">
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;