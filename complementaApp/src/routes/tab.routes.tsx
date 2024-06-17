import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Alert, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faListAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import {AtividadeStack} from './stack.routes';
import CreateActivity from '../screens/NovaAtividade';

const Tab = createBottomTabNavigator();

interface TabRoutesProps {
  onLogout: () => void;
}

export default function TabRoutes({onLogout}: TabRoutesProps) {
  const handleLogout = () => {
    Alert.alert(
      'Confirmação',
      'Você tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: onLogout,
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Página Inicial') {
            iconName = faHome;
          } else if (route.name === 'Atividades') {
            iconName = faListAlt;
          } else if (route.name === 'Nova Atividade') {
            iconName = faPlus;
          } else if (route.name === 'Meu Perfil') {
            iconName = faUser;
          }

          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#0dd658',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Página Inicial"
        component={Home}
        options={{tabBarLabel: 'Inicio', headerShown: false}}
      />
      <Tab.Screen name="Atividades" component={AtividadeStack} />
      <Tab.Screen name="Nova Atividade" component={CreateActivity} />
      <Tab.Screen
        name="Meu Perfil"
        options={{
          headerRight: () => (
            <Button onPress={handleLogout} title="Sair" color="#3199e9" />
          ),
        }}>
        {() => <Profile onLogout={handleLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
