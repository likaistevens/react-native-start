import {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          console.log('navigation', props);
          props.navigation.navigate('Details');
        }}
      />
      <Button
        title="Go to FlatListDemo"
        onPress={() =>
          props.navigation.navigate('FlatListDemo', {title: '我是demo'})
        }
      />
      <Button
        title="Go to WifiDemo"
        onPress={() => props.navigation.navigate('WifiDemo')}
      />
      <Button
        title="Go to BlueToothDemo"
        onPress={() => props.navigation.navigate('BlueToothDemo')}
      />
    </View>
  );
}

export default HomeScreen;
