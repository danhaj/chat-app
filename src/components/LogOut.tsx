import React from 'react';
import exitIcon from '../assets/icons/exit.svg';
import { auth } from '../services/firebase';

const LogOut: React.FC = () => {
  const handleClick = () => {
    auth.signOut();
  };

  return (
    <button onClick={handleClick} className='h-4/5'>
      <img src={exitIcon} alt='exit' className='h-full' />
    </button>
  );
};

export default LogOut;
