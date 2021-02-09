import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { auth, FirebaseUser } from './services/firebase';
import { UserContext } from './context/UserContext';
import Chat from './pages/Chat';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
