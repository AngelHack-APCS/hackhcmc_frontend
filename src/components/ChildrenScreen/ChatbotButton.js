import React, { useState } from 'react';
import icon from '../../assets/capybara.png';
import { ChatUI } from '../ChatInterface/ChatUI';

const ChatbotButton = () => {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <button 
        onClick={handleClick} 
        className="p-2 rounded-full bg-gray-200 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <img src={icon} alt="Capybara" className="w-12 h-12" />
      </button>
      
      <div className={`absolute bottom-0 left-0 right-0 w-full h-[100%] bg-[#EBF4F6] transform transition-transform duration-300 ease-out ${showChat ? 'translate-y-0' : 'translate-y-full'} z-20 rounded-t-lg`}>
        <div className="h-full">
          <ChatUI onHeaderClicked={() => setShowChat(false)} isShowChat={showChat}/>        
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
