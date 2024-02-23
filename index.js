/**
 * @format
 */
import App from './App';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import AnimatedExample from './src/components/Animation';
import SplashScreen from './src/screen/SplashScreen';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import ForgotScreen from './src/screen/Forgot';

AppRegistry.registerComponent(appName, () => App);
