import { Platform} from 'react-native';
import {App} from './App';
import "react-native-url-polyfill/auto"
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', {rootTag});
}
