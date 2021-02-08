import React from 'react';
import Message from './Message';

const MessagesList: React.FC = () => {
  const messages = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`,
  ];

  return (
    <div className='container flex flex-col mx-auto'>
      {messages.map(message => (
        <Message>{message}</Message>
      ))}
    </div>
  );
};

export default MessagesList;
