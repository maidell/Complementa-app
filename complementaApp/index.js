import { Platform} from 'react-native';
import App from './App';
import "react-native-url-polyfill/auto"
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', {rootTag});
}
