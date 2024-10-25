import React from 'react';
import { X } from 'lucide-react';

const Avatar = ({ initials, className = "" }) => (
  <div className={`flex items-center justify-center rounded-full bg-blue-500 text-white ${className}`}>
    {initials}
  </div>
);

const Message = ({ message, isSent }) => (
  <div className={`flex items-start gap-3 group p-2 w-full ${isSent ? 'flex-row-reverse' : ''}`}>
    <Avatar 
      initials={message.initials} 
      className="w-8 h-8 text-xs flex-shrink-0"
    />
    <div className={`max-w-[70%] ${isSent ? 'items-end' : 'items-start'}`}>
      <div className={`flex justify-between items-center gap-2 ${isSent ? 'flex-row-reverse' : ''}`}>
        <span className="font-medium text-sm">{message.sender}</span>
        <span className="text-xs text-gray-500">{message.time}</span>
      </div>
      <div className={`mt-1 p-3 rounded-lg ${
        isSent 
          ? 'bg-blue-500 text-white rounded-tr-none' 
          : 'bg-gray-100 text-gray-700 rounded-tl-none'
      }`}>
        <p className="text-sm">{message.message}</p>
      </div>
    </div>
  </div>
);

const Chat = ({ isOpen, onClose }) => {
  const messages = [
    {
      id: 1,
      sender: "Message Pricing",
      message: "Have a great workday ahead!",
      time: "03:34 PM",
      initials: "MP",
      isSent: false
    },
    {
      id: 2,
      sender: "David Masterson",
      message: "Have a great workday ahead!",
      time: "03:34 PM",
      initials: "DM",
      isSent: true
    },
    {
      id: 3,
      sender: "Kate Wilson",
      message: "Progress",
      time: "03:34 PM",
      initials: "KW",
      isSent: false
    },
    {
      id: 4,
      sender: "Rebecca Hardy",
      message: "What do you think about our new Team Section?",
      time: "03:35 PM",
      initials: "RH",
      isSent: true
    },
    {
      id: 5,
      sender: "Kate Wilson",
      message: "Okay, thanks for the tip!",
      time: "03:36 PM",
      initials: "KW",
      isSent: false
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg fixed top-2 right-6">
      
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Project Overview</h2>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">Apr 14 - May 7</span>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {['KW', 'DM', 'RH', 'MP'].map((initial, idx) => (
              <Avatar 
                key={idx} 
                initials={initial} 
                className="w-6 h-6 text-xs border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">Status: In Progress</span>
        </div>
      </div>

      <div className="h-[300px] overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} isSent={msg.isSent} />
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center bg-gray-50 rounded-lg p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm"
          />
          <button className="text-violet-900 px-2 text-sm font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;