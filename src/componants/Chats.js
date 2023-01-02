import React, { useRef } from 'react';
import FriendUser from './chat/FriendUser';
import ChatHeader from './chat/ChatHeader';
import LocalUser from './chat/LocalUser';
import UserInput from './chat/UserInput';
import { useParams } from 'react-router-dom';

const chats = {
  '1': [
    {
      sender: 'local',
      message: 'Hello, how are you today?'
    },
    {
      sender: 'friend',
      message: 'Im doing well, thanks for asking! How about you?'
    },
    {
      sender: 'local',
      message: 'Im enjoying life with cup of beer'
    },
    {
      sender: 'friend',
      message: 'Send Some beers to me'
    }
  ],
  '2': [
    {
      sender: 'local',
      message: 'Hey, whats up?'
    },
    {
      sender: 'friend',
      message: 'Not much, just hanging out at home.'
    }
  ]
};

const Chats = () => {
  const { userId } = useParams();
  const currentChats = chats[userId];
  const messageElement = useRef(null);

  if (!currentChats) {
    return null;
  }

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const { pageX, pageY } = touch;

    // Update the position of the reply button based on the finger movement
    const replyButtonElement = messageElement.current.querySelector('.reply-button');
    if (typeof replyButtonElement !== 'undefined' && replyButtonElement !== null) {
        replyButtonElement.style.left = `${pageX}px`;
        replyButtonElement.style.top = `${pageY}px`;
      }
      
  };

  const chatMessages = currentChats.map((message, index) => {
    if (message.sender === 'local') {
      return <LocalUser key={index} message={message} />;
    } else {
      return <FriendUser key={index} message={message} />;
    }
  });
  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
  
    // Update the position of the reply button based on the mouse movement
    const replyButtonElement = messageElement.current.querySelector('.reply-button');
    if (typeof replyButtonElement !== 'undefined' && replyButtonElement !== null) {
        replyButtonElement.style.left = `${pageX}px`;
        replyButtonElement.style.top = `${pageY}px`;
      }
      
  };
  

  return (
    <div className="chat-section h-[100%]">
      <ChatHeader />
      <div ref={messageElement} onTouchMove={handleTouchMove} onMouseMove={handleMouseMove} className="users-chats p-5 overflow-y-scroll h-[400px]">
        {chatMessages}
      </div>
      <UserInput />
      <div className="reply-button">Reply</div>
    </div>
  );
};

export default Chats;
