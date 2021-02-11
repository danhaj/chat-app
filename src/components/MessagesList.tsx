import React, { useContext, useEffect, useRef } from 'react';
import { MessagesContext } from '../context/MessagesContext';
import { UserContext } from '../context/UserContext';
import MessageCard from './MessageCard';

const MessagesList: React.FC = () => {
  const messages = useContext(MessagesContext);
  const user = useContext(UserContext);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollDown();
  });

  const scrollDown = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  return (
    <div ref={messagesRef} className='pt-12 pb-16'>
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
