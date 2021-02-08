import React from 'react';
import MessagesList from './components/MessagesList';

const App: React.FC = () => (
  <div className='container flex flex-col mx-auto'>
    <MessagesList />
  </div>
);

export default App;
