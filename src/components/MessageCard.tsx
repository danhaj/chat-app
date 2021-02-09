import React from 'react';
import { Message } from '../types';

interface MessageProps {
  message: Message;
}

const MessageCard: React.FC<MessageProps> = ({ message }) => {
  const { author, value, date } = message;

  return (
    <div>
      <span className='mx-2 text-gray-400 text-sm'>
        {author}, {date}
      </span>
      <div className='shadow mx-2 mb-2 rounded px-6 py-3 max-w-max break-words bg-gray-100'>
        {value}
      </div>
    </div>
  );
};

export default MessageCard;
