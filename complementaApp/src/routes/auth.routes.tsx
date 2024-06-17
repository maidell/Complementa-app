import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {User} from '../models/models';
import Autocadastro from '../screens/Autocadastro';

const AuthStack = createStackNavigator();

interface AuthRoutesProps {
  onLogin: (user: User) => void;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({onLogin}) => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login">
        {props => <Login {...props} onLogin={onLogin} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Register" component={Autocadastro} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
