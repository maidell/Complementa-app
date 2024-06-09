import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { AtividadeStack } from './stack.routes';
import CreateActivity from '../screens/NovaAtividade';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faListAlt } from '@fortawesome/free-solid-svg-icons/faListAlt';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Página Inicial') {
            iconName = faHome;
          } else if (route.name === 'Atividades') {
            iconName = faListAlt;
          } else if (route.name === 'Meu Perfil') {
            iconName = faUser;
          } else if (route.name === 'Nova Atividade') {
            iconName = faPlus;
          }

          // Return the FontAwesomeIcon component
          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#0dd658', // Color when tab is selected
        tabBarInactiveTintColor: 'gray', // Color when tab is not selected
      })}
    >
      <Tab.Screen
        name="Página Inicial"
        component={Home}
        options={{ tabBarLabel: 'Inicio', headerShown: false, }}

      />
      <Tab.Screen
        name="Atividades"
        component={AtividadeStack}

      />
      <Tab.Screen
        name="Meu Perfil"
        component={Profile}
      />
      <Tab.Screen
        name="Nova Atividade"
        component={CreateActivity}
      />
    </Tab.Navigator>
  );
}
