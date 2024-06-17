import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import TabRoutes from './tab.routes';
import {User} from '../models/models';

const Routes = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      {user ? (
        <TabRoutes user={user} onLogout={handleLogout} />
      ) : (
        <AuthRoutes onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

export default Routes;
