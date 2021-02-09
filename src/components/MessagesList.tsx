import React, { useContext } from 'react';
import { MessagesContext } from '../context/MessagesContext';
import { UserContext } from '../context/UserContext';
import MessageCard from './MessageCard';

const MessagesList: React.FC = () => {
  const messages = useContext(MessagesContext);
  const user = useContext(UserContext);

  return (
    <div>
      {messages &&
        messages.map(message => {
          const isUserAuthor = user?.email === message.author;

          return (
            <MessageCard
              key={message.id}
              message={message}
              isUserAuthor={isUserAuthor}
            ></MessageCard>
          );
        })}
    </div>
  );
};

export default MessagesList;
