import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { firestore } from '../services/firebase';
import { UserContext } from '../context/UserContext';
import { MessagesContext } from '../context/MessagesContext';
import { Message } from '../types';
import MessagesList from '../components/MessagesList';
import SendMessage from '../components/SendMessage';

const Chat: React.FC = () => {
  const user = useContext(UserContext);
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('messages')
      .orderBy('time')
      .onSnapshot(snapshot => {
        const tmp: Message[] = [];

        snapshot.docs.forEach(message => {
          tmp.push({
            ...message.data(),
            id: message.id,
          } as Message);
        });
        setMessages(tmp);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) return <Redirect to='/' />;

  return (
    <MessagesContext.Provider value={messages}>
      <MessagesList />
      <SendMessage />
    </MessagesContext.Provider>
  );
};

export default Chat;
