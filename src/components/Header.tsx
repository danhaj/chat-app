import React from 'react';
import LogOut from './LogOut';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center px-2 fixed w-full h-12 border-b border-gray-400 bg-white'>
      <p className='text-gray-600 font-bold'>Channel 1</p>
      <LogOut />
    </header>
  );
};

export default Header;
