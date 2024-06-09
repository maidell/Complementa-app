import {NavigationContainer} from '@react-navigation/native';
import TabRoutes from './tab.routes.tsx';

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
