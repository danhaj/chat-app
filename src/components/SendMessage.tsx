import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import sendIcon from '../assets/icons/send.svg';
import { UserContext } from '../context/UserContext';
import { firestore, FirestoreTimestamp } from '../services/firebase';

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const user = useContext(UserContext);

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    if (user && message) {
      await firestore.collection('messages').add({
        author: user.email,
        value: message,
        time: FirestoreTimestamp.now(),
      });
    }

    setMessage('');
  };

  return (
    <form
      onSubmit={ev => handleSubmit(ev)}
      className='flex items-center w-full fixed bottom-0 border-t border-gray-400 bg-white h-16'
    >
      <input
        type='text'
        className='w-full h-3/5 rounded-3xl m-2 border-gray-400'
        value={message}
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setMessage(ev.target.value)
        }
      />
      <button type='submit'>
        <img src={sendIcon} className='p-2 h-full' />
      </button>
    </form>
  );
};

export default SendMessage;
