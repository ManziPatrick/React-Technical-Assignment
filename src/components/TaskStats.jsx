import React, { useState } from 'react';
import { Link2, ChevronDown, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import menu from '../assets/menu.svg'
import menu1 from '../assets/menu (1).svg'
const WebsiteHeader = () => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
  };

  const collaborators = [
    { id: 1, name: 'Sarah Wilson', bgColor: 'bg-blue-500' },
    { id: 2, name: 'Mike Chen', bgColor: 'bg-green-500' },
    { id: 3, name: 'Alex Kim', bgColor: 'bg-purple-500' },
  ];

  return (
    <div className=" dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className='flex justify-between'>
          <div className="py-2 text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
            <span>{t('workspace')}</span>
            <span className="mx-2">{'>'}</span>
            <span>{t('creativeWebsite')}</span>
            <span className="mx-2">{'>'}</span>
            <span className=' font-bold'>{t('Creative')}</span>
          </div>
          <div>
            <div className="text-sm py-2 text-gray-500 dark:text-gray-400">{t('updated')} 12 min ago</div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t('websiteDesign')}</h1>
        </div> 
        <div className="py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start md:flex-row flex-col gap-4">
            <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-md">
              <span className='dark:text-white text-gray-900'>{t('limitedAccess')}</span>
              <ChevronDown size={16} />
            </button>
            <div className="flex -space-x-2">
              {collaborators.map(({ id, name, bgColor }) => (
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

          <div className="flex items-center gap-1">
          <div className="flex items-center gap-0">
    
        <button 
          onClick={handleCopy} 
          className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md "
        >
          <Copy size={16} className='text-blue-500' />
        </button>
        {isCopied && (
          <div className="absolute top-12 text-green-500 text-sm bg-white dark:bg-gray-900 px-2 py-1 rounded-md shadow-md">
            Link copied!
          </div>
        )}
      </div>
      <div className='w-[1px] h-6 bg-gray-200 rounded-sm'></div>
      <div className='flex items-center gap-1'>
        <div className='bg-violet-300 p-1 px-2 font-extrabold rounded-md'>
      <img src={menu1} className='w-4 h-6'/>
      </div>
      <div className=' p-2 rounded-md' >
      <img src={menu} className='w-4 h-4'/>
      </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
