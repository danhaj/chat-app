import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import MessagesList from '../components/MessagesList';

const Chat: React.FC = () => {
  const user = useContext(UserContext);

  if (!user) return <Redirect to='/' />;

  return <MessagesList />;
};

export default Chat;
