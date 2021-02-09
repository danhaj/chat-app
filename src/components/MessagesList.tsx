import React, { useContext } from 'react';
import { MessagesContext } from '../context/MessagesContext';
import MessageCard from './MessageCard';

const MessagesList: React.FC = () => {
  const messages = useContext(MessagesContext);

  return (
    <div className='container flex flex-col mx-auto'>
      {messages &&
        messages.map(message => (
          <MessageCard key={message.id} message={message}></MessageCard>
        ))}
    </div>
  );
};

export default MessagesList;
