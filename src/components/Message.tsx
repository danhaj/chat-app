import React from 'react';

interface MessageProps {
  children: string;
}

const Message: React.FC<MessageProps> = ({ children }) => {
  return (
    <div className='shadow m-2 rounded px-6 py-3 max-w-max break-words bg-gray-100'>
      {children}
    </div>
  );
};

export default Message;
