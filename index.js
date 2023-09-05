/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {StackRouter} from 'react-navigation';
// import FlatListDemo from './pages/FlatListDemo';
// import App from './pages/example/App';
// const AppRoot = StackRouter({
//   App: {
//     screen: App,
//   },
// });

AppRegistry.registerComponent(appName, () => App);
