import React from 'react';
import { Message } from '../types';

interface MessageProps {
  message: Message;
  isUserAuthor: boolean;
}

const MessageCard: React.FC<MessageProps> = ({ message, isUserAuthor }) => {
  const { author, value, time } = message;
  const hour = time.toDate().toLocaleTimeString();

  return (
    <div>
      {isUserAuthor ? (
        <div className='flex flex-col items-end'>
          <span className='mx-2 text-gray-400 text-sm'>{hour}</span>
          <div className='shadow mx-2 mb-2 rounded px-6 py-3 max-w-max break-words bg-blue-500 text-white'>
            {value}
          </div>
        </div>
      ) : (
        <>
          <span className='mx-2 text-gray-400 text-sm'>
            {author}, {hour}
          </span>
          <div className='shadow mx-2 mb-2 rounded px-6 py-3 max-w-max break-words bg-gray-100'>
            {value}
          </div>
        </>
      )}
    </div>
  );
};

export default MessageCard;
