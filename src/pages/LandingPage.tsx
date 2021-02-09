import React from 'react';
import SignIn from '../components/SignIn';

const LandingPage: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='font-bold text-3xl text-center my-5'>Chat app</h2>
      <SignIn />
    </div>
  );
};

export default LandingPage;
