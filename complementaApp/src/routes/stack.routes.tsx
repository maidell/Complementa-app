import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Atividades from '../screens/Atividades';
import CreateActivity from '../screens/NovaAtividade';

const Stack = createNativeStackNavigator();

export function AtividadeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityList"
        component={Atividades}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateActivity"
        component={CreateActivity}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
