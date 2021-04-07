import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import './src/translations/i18n';

AppRegistry.registerComponent(appName, () => App);
