import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatListDemo from './pages/FlatListDemo';
import WifiDemo from './pages/WifiDemo';
import BlueToothDemo from './pages/BlueToothDemo';
import HomeScreen from './pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="FlatListDemo"
          component={FlatListDemo}
          options={({navigation, route}) => {
            console.log('name', navigation.state, route);
            return {
              headerBackTitle: 'back home home home ',
              // title: route.params.title,
            };
          }}
        />
        <Stack.Screen name="WifiDemo" component={WifiDemo} />
        <Stack.Screen name="BlueToothDemo" component={BlueToothDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
