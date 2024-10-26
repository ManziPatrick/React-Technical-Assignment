import React from 'react';
import { X } from 'lucide-react';

const Avatar = ({ initials, className = "" }) => (
  <div className={`flex items-center justify-center rounded-full bg-blue-500 text-white ${className}`}>
    {initials}
  </div>
);

const Message = ({ message, isSent }) => (
  <div className={`flex items-start gap-3 group p-2 w-full ${isSent ? 'flex-row-reverse' : ''}`}>
    <Avatar initials={message.initials} className="w-8 h-8 text-xs flex-shrink-0" />
    <div className={`max-w-[70%] ${isSent ? 'items-end' : 'items-start'}`}>
      <div className={`flex justify-between items-center gap-2 ${isSent ? 'flex-row-reverse' : ''}`}>
        <span className="font-medium text-sm">{message.sender}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
      </div>
      <div className={`mt-1 p-3 rounded-lg ${
        isSent 
          ? 'bg-blue-500 text-white rounded-tr-none' 
          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-tl-none'
      }`}>
        <p className="text-sm">{message.message}</p>
      </div>
    </div>
  </div>
);

const Chat = ({ isOpen, onClose }) => {
  const messages = [
    { id: 1, sender: "Message Pricing", message: "Have a great jobsss ahead!", time: "03:34 PM", initials: "MP", isSent: false },
    { id: 2, sender: "David mugabo", message: "Have a great workday ahead!", time: "04:34 PM", initials: "DM", isSent: true },
    { id: 2, sender: "David akimana ", message: "Have a serious day!", time: "04:44 PM", initials: "DM", isSent: false },
   
  ];

  if (!isOpen) return null;

  return (
    <div className="w-60 md:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg fixed top-12 right-2 md:top-24 md:right-6">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold dark:text-gray-200">Project Overview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <X size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {['KW', 'DM', 'RH', 'MP'].map((initial, idx) => (
              <Avatar key={idx} initials={initial} className="w-6 h-6 text-xs border-2 border-white" />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Status: In Progress</span>
        </div>
      </div>

      <div className="h-[300px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} isSent={msg.isSent} />
        ))}
      </div>

      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm dark:text-gray-200"
          />
          <button className="text-violet-900 dark:text-violet-400 px-2 text-sm font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
