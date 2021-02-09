import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Chat } from './pages/Chat';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default App;
