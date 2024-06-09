import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../screens/Profile';
import Home from '../screens/Home';
import {Feather} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AtividadeStack } from './stack.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Página Inicial"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen

        name="Atividades"
        component={AtividadeStack}
        options={{
          tabBarIcon: ({color, size}) => <FontAwesome5 name="list-alt" size={size} color={color} />,
        }}
        />
      <Tab.Screen
      name="Meu Perfil"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => <Feather name="user" size={size} color={color} />,

      }}
      />
    </Tab.Navigator>
  );
}
